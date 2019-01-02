import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactGA from "react-ga";

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export default function withTracker(WrappedComponent) {
  class HOC extends PureComponent {
    componentDidMount() {
      const { location } = this.props;
      trackPage(location.pathname);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  };

  return HOC;
}
