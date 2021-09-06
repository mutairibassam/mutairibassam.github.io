import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ReactGA from "react-ga";

function initAnalytics() {
  ReactGA.initialize("UA-206685696-1");
  ReactGA.pageview("Home");
}

function MyApp({ Component, pageProps }: AppProps) {
  initAnalytics();
  return <Component {...pageProps} />;
}
export default MyApp;
