import isArray from "lodash/isArray";

export default function flattenNodes(nodeOrNodes) {
  // React tries to be clever and so children may just be a single child
  const nodes = isArray(nodeOrNodes) ? nodeOrNodes : [nodeOrNodes];

  return nodes.reduce((previousNodes, node) => {
    if (node === undefined) {
      return previousNodes;
    }
    if (node.props && node.props.children) {
      return previousNodes
        .concat([node])
        .concat(flattenNodes(node.props.children));
    }
    return previousNodes.concat([node]);
  }, []);
}
