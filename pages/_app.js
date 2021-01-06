import "../assets/css/all.css";
import "../assets/css/slick.css";
// import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Router from "next/router";
import React from "react";

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

import { loadingStart, loadingEnd } from "../store/router";

export default function MyApp({ Component, pageProps }) {
  const store = configureStore();

  // Binding events.
  Router.events.on("routeChangeStart", () => {
    store.dispatch(loadingStart());
  });
  Router.events.on("routeChangeComplete", () => {
    store.dispatch(loadingEnd());
  });
  Router.events.on("routeChangeError", () => {
    store.dispatch(loadingEnd());
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
