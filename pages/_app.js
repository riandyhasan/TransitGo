import '@src/styles/globals.css';
import Splash from '@src/pages/Splash';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Splash />
    </>
  );
}
