import type { SVGProps } from 'react';
import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';

import cls from './Select.module.css';

interface SelectProps extends SelectPrimitive.SelectProps {
  label?: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
  error?: { error: boolean; message?: string };
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, label, Icon, error, className, ...props }, ref) => (
    <div
      className={clsx(cls.select_wrapper, { [cls.select_wrapper_error]: error?.error, className })}
    >
      {label && <p className={cls.label}>{label}</p>}
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger className={cls.trigger} ref={ref}>
          <div className={cls.value_wrapper}>
            {Icon && <Icon />}
            <SelectPrimitive.Value />
          </div>
          <SelectPrimitive.Icon>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={cls.content} position='popper'>
            <SelectPrimitive.ScrollUpButton>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {error?.message && <p className={cls.error_message}>{error.message}</p>}
    </div>
  )
);
