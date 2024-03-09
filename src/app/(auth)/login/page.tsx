'use client';

import * as React from 'react';

import { TextInput } from '@/components/ui/TextInput';

export default function Login() {
  // const session = false;
  // if (!session) {
  //   throw new Error('This error is from the login page');
  // }

  return (
    <div className='m-auto md:m-0 pt-[109px] md:pl-[81px] max-w-[440px]'>
      <h1 className='text-2xl font-semibold pb-[40px] md:pb-[78px]'>Sign in</h1>
      <div className='flex flex-col gap-5'>
        <TextInput placeholder='Enter your username' />
      </div>
      <div className='flex justify-between text-xs mt-3'>
        <span>Remember me</span>
        <span>Forgot password?</span>
      </div>
    </div>
  );
}
