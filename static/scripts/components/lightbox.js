import React from 'react';
import Actions from 'stores/actions';
import _ from 'lodash';

export default React.createClass({
    getDefaultProps () {
        return {
            visible: false,
            content: null
        };
    },

    getInitialState () {
        return {
            loading: false,
            imageWidth: 200,
            imageHeight: 200,
            viewportWidth: 0,
            viewportHeight: 0
        };
    },

    componentWillReceiveProps (nextProps) {
        if (nextProps.content !== this.props.content) {
            this.setState({
                loading: true,
                imageWidth: 200,
                imageHeight: 200
            });
        }
    },

    onWindowResize () {
        this.setState({
            viewportWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            viewportHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        });
    },

    componentDidMount () {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.onWindowResize, false);
            this.onWindowResize();
        }
    },

    componentWillUnmount () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onWindowResize, false);
        }
    },

    render () {
        var heightMultiplier = (this.state.viewportHeight - 100) / this.state.imageHeight;
        var widthMultiplier = (this.state.viewportWidth - 100) / this.state.imageWidth;
        var multiplier = Math.min(1, Math.min(widthMultiplier, heightMultiplier));
        var height = multiplier * this.state.imageHeight;
        var width = multiplier * this.state.imageWidth;

        var contentIsVector = this.props.content && _.endsWith(this.props.content.toString(), '.svg');

        return (
            <div className={'lightbox' + (this.props.visible ? ' fade-visible' : '')} onClick={Actions.closeLightbox}>
                <div className='lightbox-modal' style={{
                    marginLeft: '-' + (width / 2) + 'px',
                    marginTop: '-' + (height / 2) + 'px',
                    height: '' + height + 'px',
                    width: '' + width + 'px'
                }}>
                    <button type='button' onClick={Actions.closeLightbox} className='lightbox-close'>Close</button>
                    <div className='lightbox-modal-content' style={{
                        backgroundColor: this.state.loading || contentIsVector ? '#fff' : 'transparent'
                    }}>
                        {!!this.props.content &&
                            <img ref={img => this._img = img}
                                src={this.props.content.toString()}
                                alt=''
                                onLoad={() => {
                                    this.setState({
                                        loading: false,
                                        imageWidth: this._img.naturalWidth,
                                        imageHeight: this._img.naturalHeight
                                    });
                                }}
                                width='100%'
                                height='100%'
                                style={{ display: this.state.loading ? 'none' : 'block' }}
                            />
                        }
                        {!!this.state.loading && <img
                            src='/static/images/icons/spinner.svg'
                            alt='Loading...'
                            width='50'
                            style={{ margin: '75px' }}
                        />}
                    </div>
                </div>
            </div>
        );
    }
});
