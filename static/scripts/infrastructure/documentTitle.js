import React, { PureComponent } from 'react';
import App from '../views/app';

let mountedInstances = [];
let state;

const emitChange = (title) => {
    state = title;

    if (typeof document !== 'undefined') {
        document.title = title ? `${title} — ${window.hfcrtAppConfig.siteTitle}` :
            window.hfcrtAppConfig.siteTitle;
    }
};

// Rewind to retrieve DocumentTitle after rendering the app server-side
export function rewind() {
    const recordedState = state;
    state = undefined;
    mountedInstances = [];
    return recordedState;
}

export default function documentTitle(Component, pageTitle) {
    state = pageTitle;

    class DocumentTitle extends PureComponent {
        componentWillMount() {
            mountedInstances.push(this);
            emitChange(pageTitle);
        }

        componentDidUpdate() {
            emitChange(pageTitle);
        }

        componentWillUnmount() {
            const index = mountedInstances.indexOf(this);
            mountedInstances.splice(index, 1);
            emitChange(null);
        }

        render() {
            return (
                <App title={pageTitle}>
                    <Component {...this.props} />
                </App>
            );
        }
    }

    return DocumentTitle;
}
