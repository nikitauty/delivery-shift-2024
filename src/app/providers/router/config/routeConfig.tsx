import type { RouteProps } from 'react-router-dom';

import { AuthPage } from '@/pages/auth';
import { CreateOrderPage } from '@/pages/createOrder/CreateOrderPage';
import { MainPage } from '@/pages/main';
import { OrderDetails } from '@/pages/orderDetails/OrderDetails';
import { OrdersPage } from '@/pages/orders/OrdersPage';
import { PaymentPage } from '@/pages/payment/PaymentPage';
import { ProfilePage } from '@/pages/profile';
import {
  AppRoutes,
  getRouteAuth,
  getRouteCreateOrder,
  getRouteMain,
  getRouteOrderDetails,
  getRouteOrders,
  getRoutePayment,
  getRouteProfile,
} from '@/shared/constants/router';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />,
  },
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ORDERS]: {
    path: getRouteOrders(),
    element: <OrdersPage />,
  },
  [AppRoutes.CREATE_ORDER]: {
    path: getRouteCreateOrder(),
    element: <CreateOrderPage />,
    authOnly: true,
  },
  [AppRoutes.ORDER_DETAILS]: {
    path: getRouteOrderDetails(':id'),
    element: <OrderDetails />,
    authOnly: true,
  },
  [AppRoutes.PAYMENT]: {
    path: getRoutePayment(),
    element: <PaymentPage />,
    authOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
};
