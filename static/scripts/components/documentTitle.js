// https://github.com/gaearon/react-document-title
// Modified to set default title and site title breadcrumb

import { Children, Component, PropTypes } from 'react';
import withSideEffect from 'infrastructure/reactSideEffect';

class DocumentTitle extends Component {
    render () {
        if (this.props.children) {
            return Children.only(this.props.children);
        } else {
            return null;
        }
    }
}

DocumentTitle.propTypes = {
    title: PropTypes.string.isRequired
};

function reducePropsToState (propsList) {
    var innermostProps = propsList[propsList.length - 1];
    if (innermostProps) {
        return innermostProps.title;
    }
}

var siteTitle = 'Heritage Food Crops Research Trust';

function handleStateChangeOnClient (title) {
    document.getElementById('page').className = !title ? 'show-header' : '';

    document.title = title ? (title + ' — ' + siteTitle) : siteTitle;
}

export default withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient
)(DocumentTitle);
