import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useGetDeliveryPointsQuery } from '@/shared/api/hooks/useGetDeliveryPointsQuery';
import { usePatchUsersProfileMutation } from '@/shared/api/hooks/usePatchUsersProfileMutation';
import { useCitiesStore } from '@/shared/store/hooks/useCitiesStore';
import { useUserStore } from '@/shared/store/hooks/useUserStore';

import type { ProfileSchema } from '../constants/profileShema';
import { profileSchema } from '../constants/profileShema';

export const useProfilePage = () => {
  const { user, setUserData } = useUserStore();

  const getPointsQuery = useGetDeliveryPointsQuery();

  const { cities, setCities } = useCitiesStore();

  const updateProfileMutation = usePatchUsersProfileMutation();

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      middlename: user?.middlename,
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      phone: user?.phone,
      city: user?.city,
    },
  });

  const [updateProfileError, setUpdateProfileError] = useState('');
  console.log(user);

  const onUpdateProfileData = form.handleSubmit(async (data: ProfileSchema) => {
    console.log('@onUpdateProfileData', data);
    setUpdateProfileError('');

    const updateProfileResponse = await updateProfileMutation.mutateAsync({
      params: {
        profile: {
          middlename: data.middlename,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          city: data.city,
        },
        phone: user!.phone,
      },
    });

    if (!updateProfileResponse?.data?.success && updateProfileResponse?.data?.reason) {
      return setUpdateProfileError(updateProfileResponse?.data?.reason);
    }

    if (updateProfileResponse.data.message || updateProfileResponse.data.error) {
      return setUpdateProfileError(updateProfileResponse.data.message ?? 'Произошла ошибка');
    }

    setUserData({
      id: user!.id,
      firstname: data.firstname,
      lastname: data.lastname,
      middlename: data.middlename,
      email: data.email,
      phone: user!.phone,
    });
  });

  useEffect(() => {
    if (getPointsQuery.data && !cities?.length) {
      setCities(getPointsQuery.data.data.points);
    }
  }, [getPointsQuery.data]);

  return {
    form,
    state: {
      cities,
      updateProfileError,
      isLoading: updateProfileMutation.isPending,
    },
    functions: {
      onUpdateProfileData,
    },
  };
};
