import React from 'react';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Heebo } from '@next/font/google';
import { globalStyles } from './styles/global';
import { Container, Header } from './styles/pages/app';

globalStyles();
const heebo = Heebo({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src='/pics/luxury-mobile.png' width='70' height='120' alt='luxury mobile logo' />
      </Header>
      <main className={heebo.className}>
        <Component {...pageProps} />
      </main>
    </Container>
  );
}
