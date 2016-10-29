import Reflux from 'reflux';
import Actions from '../stores/actions';

export default Reflux.createStore({
    init() {
        this.listenTo(Actions.setDocumentTitle, this.setDocumentTitle);
    },

    currentPageTitle: null,

    setDocumentTitle(title) {
        if (typeof document !== 'undefined') {
            document.title = title ? `${title} — ${window.hfcrtAppConfig.siteTitle}` :
                window.hfcrtAppConfig.siteTitle;
        }
        this.currentPageTitle = title;
        this.trigger(this.currentPageTitle);
    },
});
