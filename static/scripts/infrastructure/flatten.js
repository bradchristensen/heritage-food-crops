import _ from 'lodash';

const flattenNodes = function (nodes) {
    // React tries to be clever and so children may just be a single child
    nodes = _.isArray(nodes) ? nodes : [nodes];

    return nodes.reduce((previousNodes, node) => {
        if (node === undefined) {
            return previousNodes;
        }
        if (node.props && node.props.children) {
            return previousNodes.concat([node]).concat(flattenNodes(node.props.children));
        }
        return previousNodes.concat([node]);
    }, []);
};

export default flattenNodes;
