import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../styles/GlobalStyle';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer theme="colored" />
    </>
  );
}

export default MyApp;
