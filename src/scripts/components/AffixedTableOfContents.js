import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function AffixedTableOfContents({ visibleSections }, { tableOfContents }) {
  return (
    <ol className="table-of-contents">
      {tableOfContents.map(item => {
        const className =
          visibleSections[visibleSections.length - 1] === item.id
            ? "active"
            : undefined;
        return (
          <li key={`contents-section-${item.id}`} className={className}>
            <a href={`#section-${item.id}`} data-scroll>
              {item.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

AffixedTableOfContents.propTypes = {
  visibleSections: PropTypes.arrayOf(PropTypes.number).isRequired
};

AffixedTableOfContents.contextTypes = {
  tableOfContents: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
        })
      ).isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(state => ({
  visibleSections: state.article.visibleSections
}))(AffixedTableOfContents);
