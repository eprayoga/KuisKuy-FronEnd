import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, store } from '../redux/store';

import GlobalStyle from '../styles/GlobalStyle';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer theme="colored" />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
