'use client';

import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import ThemeSwitcher from '@/components/utils/ThemeSwitcher';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white dark:bg-black'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>
            Next.js + Tailwind CSS + TypeScript + Recoil + shadCn + Axios +
            Tanstack query Starter
          </h1>
          <p className='mt-2 text-sm text-muted-foreground'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            lll Import, Seo, Link component, pre-configured with Husky{' '}
          </p>

          <div className=' py-5'>
            <ThemeSwitcher />
            <div className='flex gap-2 underline text-blue-500'>
              <Link href='/register'>Register</Link>
              <Link href='/login'>Login</Link>
            </div>
          </div>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <Link
              href='https://github.com/johnsus1995'
              className='text-blue-500'
              target='_blank'
            >
              Jaison John
            </Link>{' '}
            with ❤️
          </footer>
        </div>
      </section>
    </main>
  );
}
