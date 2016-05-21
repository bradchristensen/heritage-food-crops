import React from 'react';
import ReactDOMServer from 'react-dom/server';
import flatten from 'infrastructure/flatten';
import _ from 'lodash';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    childContextTypes: {
        assignSectionHeadingId: React.PropTypes.func,
        assignSectionSubheadingId: React.PropTypes.func,
        assignReferenceId: React.PropTypes.func,
        tableOfContents: React.PropTypes.array,
        references: React.PropTypes.array
    },

    // to be built by getChildContext()
    references: null,
    referenceIds: null,
    tableOfContents: null,

    buildTableOfContents (flattenedNodes) {
        this.nextSectionHeading = 0;

        var tableOfContents = [];

        var headingIds = 0;
        var subheadingIds = 0;

        _.forEach(flattenedNodes, node => {
            if (node.type && node.type.displayName === 'sectionHeading') {
                if (!node.props.exclude) {
                    tableOfContents.push({
                        node,
                        text: node.props.shortText || node.props.children,
                        children: [],
                        id: ++headingIds
                    });
                    subheadingIds = 0;
                }
            }

            if (node.type && node.type.displayName === 'sectionSubheading') {
                if (!node.props.exclude) {
                    tableOfContents[tableOfContents.length - 1].children.push({
                        node,
                        text: node.props.shortText || node.props.children,
                        id: ++subheadingIds
                    });
                }
            }
        });

        return tableOfContents;
    },

    buildReferences (flattenedNodes) {
        this.referenceIds = [];
        this.nextReference = 0;

        var references = [];
        var referenceIds = 0;

        _.forEach(flattenedNodes, node => {
            if (node.type && node.type.displayName === 'reference') {
                var markup = node.props.source || node.props.children;
                if (markup.toString() !== markup) {
                    markup = ReactDOMServer.renderToStaticMarkup(markup);
                }

                var duplicateReference = _.find(references, ref => ref.markup === markup);
                if (duplicateReference) {
                    this.referenceIds.push(duplicateReference.id);
                } else {
                    references.push({
                        node,
                        markup,
                        value: node.props.source || node.props.children,
                        href: node.props.href,
                        id: ++referenceIds
                    });
                    this.referenceIds.push(referenceIds);
                }
            }
        });

        return references;
    },

    nextReference: 0,
    assignReferenceId () {
        return this.referenceIds[this.nextReference++];
    },

    nextSectionSubheading: 0,
    assignSectionSubheadingId () {
        return {
            parentId: this.nextSectionHeading,
            id: ++this.nextSectionSubheading
        };
    },

    nextSectionHeading: 0,
    assignSectionHeadingId () {
        this.nextSectionSubheading = 0;
        return ++this.nextSectionHeading;
    },

    getChildContext () {
        var flattenedNodes = flatten(this.props.children);
        this.tableOfContents = this.buildTableOfContents(flattenedNodes);
        this.references = this.buildReferences(flattenedNodes);

        return {
            assignSectionHeadingId: this.assignSectionHeadingId,
            assignSectionSubheadingId: this.assignSectionSubheadingId,
            assignReferenceId: this.assignReferenceId,
            tableOfContents: this.tableOfContents,
            references: this.references
        };
    },

    render () {
        var props = _.assign({}, this.props);
        delete props.children;
        return React.createElement('div', props, this.props.children);
    }
});
