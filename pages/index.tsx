import { MainLayout } from '@/components/layout';
import { ReactElement } from 'react';

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

