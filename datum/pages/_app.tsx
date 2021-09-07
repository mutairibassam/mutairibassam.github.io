import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import ReactGA from "react-ga";

// function initAnalytics() {
//   ReactGA.initialize("UA-206685696-1");
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }

// import React, { useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import ReactGA from "react-ga";

// Init Google Analytics
// ReactGA.initialize("UA-206685696-1");

function MyApp({ Component, pageProps }: AppProps) {
  // const location = BrowserRouter();
  // console.log(location);

  // Fired on every route change
  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);

  return <Component {...pageProps} />;
}
export default MyApp;
