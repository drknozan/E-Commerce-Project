import { Provider } from 'react-redux'
import store from '../store/store';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import { SessionProvider } from "next-auth/react";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  
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