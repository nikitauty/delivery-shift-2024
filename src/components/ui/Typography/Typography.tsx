import clsx from 'clsx';

import cls from './Typography.module.css';

type TypographyVariant =
  // Regular
  | 'typography32_regular'
  | 'typography24_regular'
  | 'typography20_regular'
  | 'typography16_regular'
  | 'typography14_regular'
  | 'typography12_regular'
  // Medium
  | 'typography32_medium'
  | 'typography24_medium'
  | 'typography20_medium'
  | 'typography16_medium'
  | 'typography14_medium'
  | 'typography12_medium'
  // Semibold
  | 'typography32_semibold'
  | 'typography24_semibold'
  | 'typography20_semibold'
  | 'typography16_semibold'
  | 'typography14_semibold'
  | 'typography12_semibold'
  // Bold
  | 'typography32_bold'
  | 'typography24_bold'
  | 'typography20_bold'
  | 'typography16_bold'
  | 'typography14_bold'
  | 'typography12_bold';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  clickable?: boolean;
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  clickable,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(cls[variant], clickable && cls.clickable, className)} {...props}>
      {children}
    </Component>
  );
};
