import React from 'react';
import PropTypes from 'prop-types';

// One day we might track outbound links with Google Analytics, but I'd rather not
// mess with the native click behaviour - e.g. open in new tab on middle click.

// Currently the react-ga OutboundLink also causes popup warnings in the browser
// if opening links in new tabs using target='_blank', which isn't great...

// For now the only function of OutboundLink is to open in a new tab by default.

export default function OutboundLink(props) {
    const passthroughProps = { ...props };
    passthroughProps.href = props.to;
    delete passthroughProps.eventLabel;
    delete passthroughProps.to;
    return (<a {...passthroughProps} />);
}

OutboundLink.propTypes = {
    eventLabel: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string,
};

OutboundLink.defaultProps = {
    href: null,
    to: null,
    target: '_blank',
    // react-ga's OutboundLink requires an eventLabel prop (but we don't use it)
    eventLabel: null,
};
