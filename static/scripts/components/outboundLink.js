import React from 'react';
import _ from 'lodash';

// One day we might track outbound links with Google Analytics, but I'd rather not
// mess with the native click behaviour - e.g. open in new tab on middle click.

// Currently the react-ga OutboundLink also causes popup warnings in the browser
// if opening links in new tabs using target='_blank', which isn't great...

// For now the only function of OutboundLink is to open in a new tab by default.

export default React.createClass({
    getDefaultProps () {
        return {
            target: '_blank',
            // react-ga's OutboundLink requires an eventLabel prop (but we don't use it)
            eventLabel: null
        };
    },

    render () {
        var props = _.assign({}, this.props);
        delete props.eventLabel;
        return React.createElement('a', props);
    }
});
