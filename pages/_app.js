import { Provider } from 'react-redux'
import store from '../store/store';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import { SessionProvider } from "next-auth/react";
import Footer from '../components/Footer';
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    }

    const handleStop = () => {
      NProgress.done();
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Navbar />
          <Sidebar />
            <Component {...pageProps} />
          <Footer />
        </Provider>
      </SessionProvider>
    </>
  )
};

export default MyApp;