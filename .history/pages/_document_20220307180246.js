import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/static/Montserrat-Black.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Comforter-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/SupermercadoOne-Regular.ttf"
            as="style"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="style"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;