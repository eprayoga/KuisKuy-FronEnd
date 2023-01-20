import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { SkeletonTheme } from 'react-loading-skeleton';

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, store } from '../redux/store';

import GlobalStyle from '../styles/GlobalStyle';

import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <SkeletonTheme baseColor="#a3a3a3" highlightColor="#919191">
          <NextNProgress
            color="#6d67e4"
            startPosition={0.5}
            stopDelayMs={200}
            height={3}
            showOnShallow
          />
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer theme="colored" />
        </SkeletonTheme>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
