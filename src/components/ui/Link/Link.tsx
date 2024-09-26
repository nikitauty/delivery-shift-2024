import type { LinkProps as RouterDomLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import cls from './Link.module.css';

interface LinkProps extends RouterDomLinkProps {
  isActive?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Link = ({ to, children, className, isActive, ...props }: LinkProps) => {
  return (
    <NavLink to={to} className={clsx(cls.link, { [cls.active]: isActive }, className)} {...props}>
      {children}
    </NavLink>
  );
};
