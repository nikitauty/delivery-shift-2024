import { Loader } from '@ui/Loader';

import cls from './LayoutLoader.module.css';

export const LayoutLoader = () => (
  <div className={cls.layout_loader}>
    <Loader />
  </div>
);
