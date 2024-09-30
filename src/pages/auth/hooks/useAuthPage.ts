import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePostAuthOtpMutation } from '@/shared/api/hooks/usePostAuthOtpMutation';
import { usePostUsersSignInMutation } from '@/shared/api/hooks/usePostUsersSigninMutation';
import { AUTH_TOKEN } from '@/shared/constants/localstorage';
import { useUserStore } from '@/shared/store/hooks/useUserStore';

import { type OtpCodeSchema, otpCodeSchema } from '../constants/otpCodeShema';
import { type PhoneSchema, phoneSchema } from '../constants/phoneShema';

export const useAuthPage = () => {
  const navigate = useNavigate();

  const { initUser } = useUserStore();

  const authOtpMutation = usePostAuthOtpMutation();
  const signInMutation = usePostUsersSignInMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [stage, setStage] = useState<'phone' | 'otp'>('phone');

  const form = useForm<OtpCodeSchema | PhoneSchema>({
    resolver: zodResolver(stage === 'phone' ? phoneSchema : otpCodeSchema),
  });

  const currentPhone = form.watch('phone');

  const handleCreateOtp = async (data?: PhoneSchema) => {
    const phone = data?.phone || currentPhone;
    const createOtpCodeResponse = await authOtpMutation.mutateAsync({ params: { phone } });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + createOtpCodeResponse.data.retryDelay,
    });

    setStage('otp');
  };

  const handleSignIn = async (data: OtpCodeSchema) => {
    const signInResponse = await signInMutation.mutateAsync({
      params: {
        phone: currentPhone,
        code: data.otpCode,
      },
    });

    if (!signInResponse.data.success && signInResponse.data.reason) {
      return form.setError('otpCode', { message: signInResponse.data.reason });
    }

    localStorage.setItem(AUTH_TOKEN, signInResponse.data.token);
    initUser(signInResponse.data.user);

    navigate('/');
  };

  const onSubmit = form.handleSubmit((data: PhoneSchema | OtpCodeSchema) => {
    if (stage === 'phone') {
      handleCreateOtp(data as PhoneSchema);
    }

    if (stage === 'otp') {
      handleSignIn(data as OtpCodeSchema);
    }
  });

  return {
    form,
    state: {
      isSubmitting: authOtpMutation.isPending || signInMutation.isPending,
      stage,
      currentPhone,
      submittedPhones,
    },
    functions: { onSubmit, handleCreateOtp },
  };
};
