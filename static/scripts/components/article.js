import React from 'react';
import _ from 'lodash';

var flattenNodes = nodes => {
    return nodes.reduce((previousNodes, node) => {
        if (node.props && _.isArray(node.props.children) && node.props.children.length) {
            return previousNodes.concat([node]).concat(flattenNodes(node.props.children));
        } else if (node.props && _.isObject(node.props.children)) {
            // React tries to be clever and so children may just be a single child
            return previousNodes.concat([node]).concat(flattenNodes([node.props.children]));
        }
        return previousNodes.concat([node]);
    }, []);
};

export default React.createClass({
    childContextTypes: {
        getHeadingNumberAtomic: React.PropTypes.func,
        assignReferenceNumberAtomic: React.PropTypes.func,
        tableOfContents: React.PropTypes.array,
        references: React.PropTypes.array
    },

    getInitialState () {
        return {
            lastHeadingNumber: 0,
            headings: {},
            lastReferenceNumber: 0,
            references: {}
        };
    },

    buildTableOfContents (flattenedNodes) {
        var tableOfContents = [];

        _.forEach(flattenedNodes, node => {
            if (node.type && node.type.displayName === 'sectionHeading') {
                if (!node.props.exclude) {
                    tableOfContents.push({
                        node,
                        text: node.props.shortText || node.props.children,
                        children: []
                    });
                }
            }

            if (node.type && node.type.displayName === 'sectionSubheading') {
                if (!node.props.exclude) {
                    tableOfContents[tableOfContents.length - 1].children.push({
                        node,
                        text: node.props.shortText || node.props.children,
                        children: []
                    });
                }
            }
        });

        return tableOfContents;
    },

    // TODO: instead of this, use existing heading numbers defined by building the table of contents
    getHeadingNumberAtomic (uniqueIdentifier) {
        return new Promise(resolve => {
            this.setState(state => {
                if (!state.headings[uniqueIdentifier]) {
                    var immutableClone = _.clone(state.headings);
                    immutableClone[uniqueIdentifier] = state.lastHeadingNumber + 1;

                    resolve(immutableClone[uniqueIdentifier]);

                    return {
                        headings: immutableClone,
                        lastHeadingNumber: state.lastHeadingNumber + 1
                    };
                }

                resolve(state.headings[uniqueIdentifier]);

                return {}; // no change
            });
        });
    },

    // TODO: this could be unreliable - build list of references using similar method to table of contents
    assignReferenceNumberAtomic (citation) {
        return new Promise(resolve => {
            this.setState(state => {
                if (!state.references[citation]) {
                    var immutableClone = _.clone(state.references);
                    immutableClone[citation] = state.lastReferenceNumber + 1;

                    resolve(immutableClone[citation]);

                    return {
                        references: immutableClone,
                        lastReferenceNumber: state.lastReferenceNumber + 1
                    };
                }

                resolve(state.references[citation]);

                return {}; // no change
            });
        });
    },

    getChildContext () {
        var flattenedNodes = flattenNodes(this.props.children);

        var tableOfContents = this.buildTableOfContents(flattenedNodes);
        var references = _.keys(this.state.references).sort((a, b) => {
            return this.state.references[a] > this.state.references[b];
        });

        return {
            getHeadingNumberAtomic: this.getHeadingNumberAtomic,
            assignReferenceNumberAtomic: this.assignReferenceNumberAtomic,
            tableOfContents,
            references
        };
    },

    render () {
        var props = _.assign({}, this.props);
        delete props.children;
        return React.createElement('div', props, this.props.children);
    }
});
