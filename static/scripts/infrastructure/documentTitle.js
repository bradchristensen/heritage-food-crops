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

    var emitChange = title => {
        state = title;
        statics.currentPageTitle = state;
        Actions.setDocumentTitle(title);
    };

    return {
        statics,

        componentWillMount () {
            mountedInstances.push(this);
            emitChange(pageTitle);
        },

        componentDidUpdate () {
            emitChange(pageTitle);
        },

        componentWillUnmount () {
            const index = mountedInstances.indexOf(this);
            mountedInstances.splice(index, 1);
            emitChange(null);
        }
    };
}
