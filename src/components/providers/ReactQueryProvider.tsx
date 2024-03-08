'use client';
import {
  // QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
    // queryCache: new QueryCache({
    //   onError: (err: any) => {
    //     toast(err?.response?.data?.message, { type: 'error' });
    //   },
    //   onSettled: () => {},
    // }),
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
