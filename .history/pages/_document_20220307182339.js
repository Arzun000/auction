import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https:code.jquery.com/jquery-3.4.1min.js"></script>
          <link
            rel="preload"
            href="/fonts/static/Montserrat-Black.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="stylesheet preload prefetch"
            href="/fonts/static/Montserrat-Medium.ttf"
            as="style"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/static/Montserrat-extraBold.ttf"
            as="style"
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
