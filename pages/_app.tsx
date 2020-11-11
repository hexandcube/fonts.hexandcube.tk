import App from 'next/app';
import '../styles/index.css';
import '../styles/variables.css';
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="https://storage.hexandcube.tk/images/logo-circle.png" />
          <link
            rel="icon"
            type="image/png"
            href="https://storage.hexandcube.tk/images/logo-circle.png"
            sizes="500x500"
          />
          <link
            rel="apple-touch-icon"
            sizes="500x500"
            href="https://storage.hexandcube.tk/images/logo-circle.png"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-TileImage"
            content="https://storage.hexandcube.tk/images/logo-circle.png"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
