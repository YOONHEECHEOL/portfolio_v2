import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
          {/* font */}
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}