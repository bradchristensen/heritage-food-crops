import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { closeLightbox } from '../actions/lightbox';

class Lightbox extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            imageWidth: 200,
            imageHeight: 200,
            viewportWidth: 0,
            viewportHeight: 0,
        };

        this.onWindowResize = this.onWindowResize.bind(this);

        this.closeLightbox = () => this.props.dispatch(closeLightbox());
        this.closeLightboxOnKeyDown = this.closeLightboxOnKeyDown.bind(this);

        if (props.visible) {
            window.addEventListener('keydown', this.closeLightboxOnKeyDown);
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize, false);
        this.onWindowResize();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.content !== this.props.content) {
            this.setState({
                loading: true,
                imageWidth: 200,
                imageHeight: 200,
            });
        }

        if (nextProps.visible) {
            window.addEventListener('keydown', this.closeLightboxOnKeyDown);

            if (nextProps.content === this.props.content) {
                this.setState({
                    imageWidth: this.imgRef.naturalWidth,
                    imageHeight: this.imgRef.naturalHeight,
                });
            }
        } else {
            window.removeEventListener('keydown', this.closeLightboxOnKeyDown);

            this.setState({
                imageWidth: 200,
                imageHeight: 200,
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeLightboxOnKeyDown);
        window.removeEventListener('resize', this.onWindowResize, false);
    }

    onWindowResize() {
        this.setState({
            viewportWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            viewportHeight: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0,
            ),
        });
    }

    closeLightboxOnKeyDown(event) {
        if (event.keyCode === 27) { // escape
            this.closeLightbox();
            event.preventDefault();
        }
    }

    render() {
        const heightMultiplier = (this.state.viewportHeight - 100) / this.state.imageHeight;
        const widthMultiplier = (this.state.viewportWidth - 100) / this.state.imageWidth;
        const multiplier = Math.min(1, Math.min(widthMultiplier, heightMultiplier));
        const height = multiplier * this.state.imageHeight;
        const width = multiplier * this.state.imageWidth;

        const contentIsVector = this.props.content && this.props.content.toString().endsWith('.svg');

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={`lightbox${this.props.visible ? ' fade-visible' : ''}`}
                onClick={this.closeLightbox}
                onKeyDown={this.closeLightboxOnKeyDown}
            >
                <div
                    className="lightbox-modal"
                    style={{
                        marginLeft: `-${width / 2}px`,
                        marginTop: `-${height / 2}px`,
                        height: `${height}px`,
                        width: `${width}px`,
                    }}
                >
                    <button
                        type="button"
                        onClick={this.closeLightbox}
                        className="lightbox-close"
                    >
                        Close
                    </button>
                    <div
                        className="lightbox-modal-content"
                        style={{
                            backgroundColor: this.state.loading || contentIsVector ?
                                '#fff' : 'transparent',
                        }}
                    >
                        {!!this.props.content &&
                            <img
                                ref={(img) => { this.imgRef = img; }}
                                src={this.props.content.toString()}
                                alt=""
                                onLoad={() => {
                                    this.setState({
                                        loading: false,
                                        imageWidth: this.imgRef.naturalWidth,
                                        imageHeight: this.imgRef.naturalHeight,
                                    });
                                }}
                                width="100%"
                                height="100%"
                                style={{ display: this.state.loading ? 'none' : 'block' }}
                            />
                        }
                        {!!this.state.loading && <img
                            src="/static/images/icons/spinner.svg"
                            alt="Loading..."
                            width="50"
                            style={{ margin: '75px' }}
                        />}
                    </div>
                    {!!this.props.caption && (
                        <div className="lightbox-caption">
                            <span className="lightbox-caption-text">{this.props.caption}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Lightbox.propTypes = {
    caption: PropTypes.node,
    content: PropTypes.node,
    dispatch: PropTypes.func.isRequired,
    visible: PropTypes.bool,
};

Lightbox.defaultProps = {
    caption: null,
    content: null,
    visible: false,
};

export default withRouter(connect()(Lightbox));
