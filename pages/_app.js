import { Provider } from 'react-redux'
import store from '../store/store';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => { if (url !== router.asPath) setLoading(true) };
      const handleComplete = (url) => { if (url === router.asPath) setLoading(false) };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError',  handleComplete);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError',  handleComplete);
      }
  });
  
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Navbar />
          <Sidebar />
              {
                loading ?
                <div className="z-30 w-screen h-screen bg-white">
                    <div className="h-24 w-24 absolute left-[calc(50%-48px)] top-[calc(50%-48px)] animate-spin rounded-full border-t-4 border-gray-400 border-t-indigo-500">

                    </div>
                </div>
                :
                <Component {...pageProps} />
            }
          <Footer />
        </Provider>
      </SessionProvider>
    </>
  )
};

export default MyApp;