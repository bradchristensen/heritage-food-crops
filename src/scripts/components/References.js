import React from "react";
import PropTypes from "prop-types";
import OutboundLink from "./OutboundLink";

export default function References(props, context) {
  return (
    <ol className="references-list">
      {context.references.map(ref => {
        const content = ref.href ? (
          <OutboundLink to={ref.href} eventLabel={ref.href}>
            {ref.value}
          </OutboundLink>
        ) : (
          ref.value
        );
        return (
          <li key={`references-${ref.id}`} id={`cite-${ref.id}`}>
            {content}
          </li>
        );
      })}
    </ol>
  );
}

References.contextTypes = {
  references: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};
