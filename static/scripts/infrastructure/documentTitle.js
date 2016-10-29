import Actions from '../stores/actions';

let mountedInstances = [];
let state;

const statics = {
    currentPageTitle: null,
};

// Rewind to retrieve DocumentTitle after rendering the app server-side
export function rewind() {
    const recordedState = state;
    state = undefined;
    mountedInstances = [];
    return recordedState;
}

export default function (pageTitle) {
    statics.currentPageTitle = pageTitle;

    const emitChange = (title) => {
        state = title;
        statics.currentPageTitle = state;
        Actions.setDocumentTitle(title);
    };

    return {
        statics,

        componentWillMount() {
            mountedInstances.push(this);
            emitChange(pageTitle);
        },

        componentDidUpdate() {
            emitChange(pageTitle);
        },

        componentWillUnmount() {
            const index = mountedInstances.indexOf(this);
            mountedInstances.splice(index, 1);
            emitChange(null);
        },
    };
}
