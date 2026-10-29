// noire.css first so Tailwind utilities (in globals.css) can override its layout classes
import '@/styles/noire.css';
import '@/styles/globals.css';
import NoireiEngine from '@/components/NoireiEngine';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* NOIRÉ cursor, nav hide/reveal and scroll-reveal engine */}
      <NoireiEngine />
      <Component {...pageProps} />
    </>
  );
}
