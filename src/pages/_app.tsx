import React from 'react';
import type { AppProps } from 'next/app';
import { Heebo } from '@next/font/google';
import { globalStyles } from './styles/global';
import Image from 'next/image';

globalStyles();
const heebo = Heebo({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Image src='/pics/luxury-mobile.png' width='70' height='120' alt='luxury mobile logo' />
      </header>
      <main className={heebo.className}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
