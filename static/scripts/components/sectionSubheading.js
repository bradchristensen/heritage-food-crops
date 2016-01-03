import React from 'react';
import _ from 'lodash';

export default React.createClass({
    render () {
        // TODO
        var props = _.assign({}, this.props);
        delete props.children;
        // TODO: associate with heading numbers so that you can click on headings in the table of contents
        //props.id = this.context.getHeadingNumber(this);
        return React.createElement('h3', props, this.props.children);
    }
});
