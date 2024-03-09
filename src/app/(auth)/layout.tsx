import * as React from 'react';

import NextImage from '@/components/NextImage';

import BalletBoxLogo from '@/../public/images/auth/authPageLogo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full h-screen'>
      <div className='left hidden md:flex justify-center items-center bg-black text-white md:w-1/2'>
        <NextImage
          alt='logo'
          src={BalletBoxLogo}
          useSkeleton
          width={137}
          height={132}
        />
      </div>
      <div className='right w-full md:w-1/2'>{children}</div>
    </div>
  );
}
