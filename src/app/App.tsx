import { Suspense } from 'react';

import { Layout } from './layout/Layout';
import { LayoutLoader } from './layout/LayoutLoader';

export const App = () => {
  return (
    <div id='app' className='app'>
      <Suspense fallback={<LayoutLoader />}>
        <Layout />
      </Suspense>
    </div>
  );
};
