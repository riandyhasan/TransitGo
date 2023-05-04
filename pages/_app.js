import '@src/styles/globals.css';
import Splash from '@src/pages/Splash';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      // save to local
      localStorage.setItem('latitude', latitude);
      localStorage.setItem('longitude', longitude);
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Splash />
    </>
  );
}
