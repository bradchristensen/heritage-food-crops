import React from 'react';
import content from '../content/AboutTheTrust.md';
import title from '../infrastructure/documentTitle';

const fixedContent = `<div class="box">${content}</div>`;

function AboutTheTrust() {
    return (
        <div className="wrapper">
            <div className="wrapper wrap-900">
                <div className="feature-text">
                    <p>
                        The <strong>Heritage Food Crops Research Trust</strong> (formerly the
                        Central Tree Crops Research Trust) is a charitable trust, established
                        to research the <strong>early prevention and treatment</strong> of
                        disease through the medicinal properties of plant-based food and
                        natural <strong>plant-based medicine</strong>.
                    </p>
                    <p />
                </div>

                <div dangerouslySetInnerHTML={{ __html: fixedContent }} />
            </div>
            <hr />
        </div>
    );
}

export default title(AboutTheTrust, 'About the Trust');
