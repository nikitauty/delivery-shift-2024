import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ExitIcon from '@icons/exit.svg?react';
import TimeIcon from '@icons/time.svg?react';
import UserIcon from '@icons/user.svg?react';
import { Link } from '@ui/Link';

import { AppLogo } from '@/components/ui/AppLogo';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography/Typography';
import { AUTH_TOKEN } from '@/shared/constants/localstorage';
import {
  getRouteAuth,
  getRouteMain,
  getRouteOrders,
  getRouteProfile,
} from '@/shared/constants/router';

import cls from './Header.module.css';

interface HeaderProps {
  mobile?: boolean;
}

export const Header = ({ mobile }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const onLogout = () => {
    //clearUser(); TODO: fix this
    localStorage.removeItem(AUTH_TOKEN);
    setIsLoggedIn(false);
    navigate(getRouteMain());
  };

  if (mobile) return null;

  return (
    <header className={cls.header}>
      <Link to={getRouteMain()}>
        <AppLogo className={cls.logo} />
      </Link>
      {isLoggedIn ? (
        <>
          <div className={cls.navbar}>
            <Link
              to={getRouteProfile()}
              isActive={location.pathname === getRouteProfile()}
              className={cls.link}
            >
              <UserIcon className={cls.link_icon} />
              <Typography variant='typography16_medium'>Профиль</Typography>
            </Link>
            <Link
              to={getRouteOrders()}
              isActive={location.pathname === getRouteOrders()}
              className={cls.link}
            >
              <TimeIcon className={cls.link_icon} />
              <Typography variant='typography16_medium'>История</Typography>
            </Link>
          </div>
          <Button className={cls.exit_button} onClick={onLogout} variant='clear'>
            <ExitIcon className={cls.button_icon} />
            <Typography variant='typography16_regular'>Выйти</Typography>
          </Button>
        </>
      ) : (
        <Link
          to={getRouteAuth()}
          className={cls.link}
          isActive={location.pathname === getRouteAuth()}
        >
          <ExitIcon className={cls.link_icon} />
          <Typography variant='typography16_regular'>Войти</Typography>
        </Link>
      )}
    </header>
  );
};
