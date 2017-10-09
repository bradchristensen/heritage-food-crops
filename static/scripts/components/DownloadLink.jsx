import React from 'react';
import PropTypes from 'prop-types';

export default function DownloadLink(props) {
    const splitExt = props.href.split('.');
    const ext = splitExt.length ? splitExt[splitExt.length - 1] : '';

    let className = 'web';
    let title = null;

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
        <blockquote className="download-link highlight">
            <h3>
                <a
                    href={props.href}
                    className={className}
                    title={title}
                    target={className === 'web' ? '_blank' : null}
                >
                    {props.title}
                </a>
            </h3>
            {!!props.description && <p>{props.description}</p>}
        </blockquote>
    );
}

DownloadLink.propTypes = {
    description: PropTypes.node,
    href: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
};

DownloadLink.defaultProps = {
    description: '',
};
