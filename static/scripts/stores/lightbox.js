import Reflux from 'reflux';
import Actions from '../stores/actions';

export default Reflux.createStore({
    visible: false,
    content: null,

    init() {
        this.listenTo(Actions.openLightbox, this.openLightbox);
        this.listenTo(Actions.closeLightbox, this.closeLightbox);
    },

    getState() {
        return {
            visible: this.visible,
            content: this.content,
            caption: this.caption,
        };
    },

    openLightbox(content, caption) {
        this.visible = true;
        this.content = content;
        this.caption = caption;
        this.trigger(this.getState());
    },

    closeLightbox() {
        this.visible = false;
        this.trigger(this.getState());
    },
});
