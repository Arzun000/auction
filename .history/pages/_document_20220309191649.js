import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/static/Montserrat-Regular.ttf"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
