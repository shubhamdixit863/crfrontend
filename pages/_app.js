import React, { useState, useEffect } from 'react';
import { IndiceProvider } from '../contexts';
import '../public/styles/global.css';

import '../styles/bootstrap.min.css';
import '../styles/animate.min.css';
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import '../styles/style.css';
import '../styles/responsive.css';

import Layout from '../components/_App/Layout';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import { SnackbarProvider } from 'notistack';
import AppContextProvider from '../contexts/AppContext';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <AppContextProvider>
      <SnackbarProvider maxSnack={3}>
          <Layout>
              <IndiceProvider>

                  <Component {...pageProps} />

                  <Loader loading={loading} />

                  <GoTop scrollStepInPx='100' delayInMs='10.50' />

              </IndiceProvider>
          </Layout>
      </SnackbarProvider>
    </AppContextProvider>

  );
}

export default MyApp;
