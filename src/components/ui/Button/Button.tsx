import React from 'react';
import clsx from 'clsx';

import cls from './Button.module.css';

export type ButtonVariant =
  | 'primary_filled'
  | 'default_filled'
  | 'primary_text'
  | 'default_text'
  | 'clear';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant = 'primary_filled', disabled, fullWidth, loading, ...props },
    ref
  ) => (
    <button
      type='button'
      className={clsx(cls.button, { [cls.full_width]: fullWidth }, className, cls[variant])}
      disabled={disabled || loading}
      ref={ref}
      {...props}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  )
);
