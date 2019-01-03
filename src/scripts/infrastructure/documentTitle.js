import React, { PureComponent } from "react";
import App from "../views/App";

let state;

const emitChange = title => {
  state = title;

  if (typeof document !== "undefined") {
    document.title = title
      ? `${title} — ${process.env.REACT_APP_SITE_TITLE}`
      : process.env.REACT_APP_SITE_TITLE;
  }
};

// Rewind to retrieve DocumentTitle after rendering the app server-side
export function rewind() {
  const recordedState = state;
  state = undefined;
  return recordedState;
}

export default function documentTitle(Component, pageTitle) {
  class DocumentTitle extends PureComponent {
    componentDidMount() {
      emitChange(pageTitle);
    }

    componentDidUpdate() {
      emitChange(pageTitle);
    }

    componentWillUnmount() {
      emitChange(null);
    }

    render() {
      state = pageTitle;

      return (
        <App title={pageTitle}>
          <Component {...this.props} />
        </App>
      );
    }
  }

  return DocumentTitle;
}
