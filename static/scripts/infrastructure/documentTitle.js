import Actions from 'stores/actions';

var mountedInstances = [];
var state;

var statics = {
    currentPageTitle: null
};

// Rewind to retrieve DocumentTitle after rendering the app server-side
export var rewind = function () {
    let recordedState = state;
    state = undefined;
    mountedInstances = [];
    return recordedState;
};

export default function (pageTitle) {
    statics.currentPageTitle = pageTitle;

    var emitChange = () => {
        state = pageTitle;
        statics.currentPageTitle = state;
        Actions.setDocumentTitle(pageTitle);
    };

    return {
        statics,

        componentWillMount () {
            mountedInstances.push(this);
            emitChange();
        },

        componentDidUpdate () {
            emitChange();
        },

        componentWillUnmount () {
            const index = mountedInstances.indexOf(this);
            mountedInstances.splice(index, 1);
            emitChange();
        }
    };
}
