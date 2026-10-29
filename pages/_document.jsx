import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0d0c0a" />
        <link rel="preload" href="/fonts/boska-300.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/boska-400.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/satoshi-400.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%230d0c0a%22/><text x=%2250%22 y=%2268%22 font-family=%22serif%22 font-size=%2256%22 text-anchor=%22middle%22 fill=%22%23b9966a%22>CB</text></svg>" />
        {/* Mark JS before first paint so scroll reveals start hidden instead of flashing */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('data-noire-js','')" }} />
      </Head>
      <body className="bg-[#0d0c0a] text-[#f7f3ec] antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
