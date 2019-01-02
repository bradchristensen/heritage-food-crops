import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import routes from "../infrastructure/routes";
import createApiClientStore from "../store/init";

const store = createApiClientStore();

export default function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>{routes}</ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}
