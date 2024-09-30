import type {
  ComponentProps,
  ForwardedRef,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from 'react';
import React from 'react';
import type { JSX } from 'react/jsx-runtime';
import clsx from 'clsx';

import cls from './Input.module.css';

export interface InputError {
  error: boolean;
  message?: string;
}

type InputProps<
  Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input',
> = {
  label?: ReactNode;
  error?: InputError;
  component?: Component;
} & ComponentProps<Component>;

export const Input = React.forwardRef(
  (
    { label, className, component, error, id: externalId, ...props }: InputProps<'input'>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId();
    const id = externalId ?? internalId;

    const Component = component ?? 'input';

    return (
      <div className={clsx(cls.input_wrapper, { [cls.input_wrapper_error]: error?.error })}>
        {label && <p className={cls.label}>{label}</p>}
        <Component className={clsx(cls.input, className)} {...props} id={id} ref={ref} />
        {error?.message && <p className={cls.error_message}>{error.message}</p>}
      </div>
    );
  }
) as <Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
