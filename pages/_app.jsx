import '@/styles/globals.css';
import NoireiEngine from '@/components/NoireiEngine';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 1:1 NOIRÉ Motion, Cursor & Interaction Engine */}
      <NoireiEngine />
      <Component {...pageProps} />
    </>
  );
}
