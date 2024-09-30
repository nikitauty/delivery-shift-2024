import { useEffect } from 'react';
import { useCountDown } from '@hooks/useCountDown';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';
import clsx from 'clsx';

import cls from './CountDownButton.module.css';

interface CountDownButtonProps {
  className?: string;
  onRetrySendOtpCode: () => void;
  loading?: boolean;
  endTime: number;
}

export const CountDownButton = ({
  loading,
  onRetrySendOtpCode,
  endTime,
  className,
}: CountDownButtonProps) => {
  const [seconds, { startCountDown }] = useCountDown({
    countStart: Math.floor((endTime - Date.now()) / 1000),
    enabled: false,
    interval: 1000,
  });

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  if (seconds)
    return (
      <Typography tag='p' variant='typography14_regular' className={cls.count_down_seconds_text}>
        Запросить код повторно можно через {seconds} секунд
      </Typography>
    );

  return (
    <Button
      variant='clear'
      onClick={onRetrySendOtpCode}
      className={clsx(cls.count_down_button, className)}
    >
      <Typography variant='typography16_medium'>
        {loading ? 'Отправка...' : 'Отправить код еще раз'}
      </Typography>
    </Button>
  );
};
