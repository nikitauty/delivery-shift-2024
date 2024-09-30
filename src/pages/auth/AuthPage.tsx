import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { convertPhoneToString } from '@/shared/utils/convertPhone';

import { CountDownButton } from './components/CountDownButton';
import { useAuthPage } from './hooks/useAuthPage';

import cls from './AuthPage.module.css';

const AuthPage = () => {
  const { state, functions, form } = useAuthPage();

  return (
    <div className={cls.wrapper}>
      <Typography variant='typography24_semibold'>Вход</Typography>
      <Typography tag='p' variant='typography16_regular'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>
      <form onSubmit={functions.onSubmit} className={cls.form_wrapper}>
        <Controller
          name='phone'
          control={form.control}
          render={({ field: { onChange, value, ...otherFieldProps }, fieldState }) => (
            <Input
              {...otherFieldProps}
              component={PatternFormat}
              format='+7 ### ### ## ##'
              onChange={(event) => onChange(convertPhoneToString(event.target.value))}
              placeholder='Телефон'
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            />
          )}
        />
        {state.stage === 'otp' && (
          <Controller
            name='otpCode'
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                component={PatternFormat}
                format='######'
                placeholder='Проверочный код'
                {...(fieldState.error && {
                  error: { error: true, message: fieldState.error.message },
                })}
              />
            )}
          />
        )}
        <Button
          loading={state.isSubmitting}
          type='submit'
          className={cls.continue_button}
          variant='primary_filled'
        >
          <Typography variant='typography16_medium'>
            {state.stage === 'phone' ? 'Продолжить' : 'Войти'}
          </Typography>
        </Button>
        {state.stage === 'otp' && (
          <CountDownButton
            endTime={state.submittedPhones[state.currentPhone]}
            loading={state.isSubmitting}
            onRetrySendOtpCode={functions.handleCreateOtp}
          />
        )}
      </form>
    </div>
  );
};

export default AuthPage;
