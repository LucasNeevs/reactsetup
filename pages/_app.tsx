import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <p>oi</p>
    <GlobalStyle />
  </>
);

export default MyApp;
