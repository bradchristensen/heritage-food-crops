import React from 'react';

export default React.createClass({
    propTypes: {
        description: React.PropTypes.node,
        href: React.PropTypes.string.isRequired,
        title: React.PropTypes.node.isRequired
    },

    getDefaultProps () {
        return {
            description: '',
            href: '',
            title: ''
        };
    },

    render () {
        var splitExt = this.props.href.split('.');
        var ext = splitExt.length ? splitExt[splitExt.length - 1] : '';

        var className = 'web';
        var title = null;

        if (ext === 'pdf') {
            className = 'freader';
            title = 'PDF Document - Adobe Reader is required to view this file.';
        } else if (ext === 'xls' || ext === 'xlsx' || ext === 'xlsm') {
            className = 'fexcel';
            title = 'Spreadsheet &mdash; Microsoft Excel or OpenOffice is required to view this file.';
        } else if (ext === 'doc' || ext === 'docx') {
            className = 'fword';
            title = 'Word Document &mdash; Microsoft Word or OpenOffice is required to view this file.';
        } else if (ext === 'ppt' || ext === 'pptx' || ext === 'pps' || ext === 'ppsx') {
            className = 'fppt';
            title = 'Presentation &mdash; Microsoft PowerPoint is required to view this slideshow.';
        }

        return (
            <blockquote className='download-link highlight'>
                <h3>
                    <a
                        href={this.props.href}
                        className={className}
                        title={title}
                        target={className === 'web' ? '_blank' : null}>
                        {this.props.title}
                    </a>
                </h3>
                {!!this.props.description && <p>{this.props.description}</p>}
            </blockquote>
        );
    }
});
