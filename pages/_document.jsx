import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0d0c0a" />
        <meta name="description" content="Casa Brio — Private Luxury Bungalow in Lonavala featuring a private swimming pool, floodlit box cricket turf, and the REVEL speakeasy snooker lounge." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
      </Head>
      <body className="bg-[#0d0c0a] text-[#f7f3ec] antialiased selection:bg-[#b9966a] selection:text-[#0d0c0a]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

