import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { Router } from '@/app/providers/router';

import { Header } from '../Header/Header';

import cls from './DesktopLayout.module.css';

export const DesktopLayout = () => {
  const location = useLocation();
  return (
    <div className={clsx(cls.desktop_layout, { [cls.main_page]: location.pathname === '/' })}>
      <Header />
      <div className={cls.content}>
        <Router />
      </div>
    </div>
  );
};
