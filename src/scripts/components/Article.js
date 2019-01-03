/* globals module */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOMServer from "react-dom/server";
import find from "lodash/find";
import forEach from "lodash/forEach";
import flatten from "../infrastructure/flatten";
import Reference from "./Reference";
import SectionHeading from "./SectionHeading";
import SectionSubheading from "./SectionSubheading";

export default class Article extends PureComponent {
  assignReferenceId = () => {
    const currentReference = this.nextReference;
    this.nextReference += 1;
    return this.referenceIds[currentReference];
  };

  assignSectionSubheadingId = () => {
    this.nextSectionSubheading += 1;
    return {
      parentId: this.nextSectionHeading,
      id: this.nextSectionSubheading
    };
  };

  assignSectionHeadingId = () => {
    this.nextSectionHeading += 1;
    this.nextSectionSubheading = 0;
    return this.nextSectionHeading;
  };

  buildTableOfContents = flattenedNodes => {
    this.nextSectionHeading = 0;

    const tableOfContents = [];

    let headingIds = 0;
    let subheadingIds = 0;

    forEach(flattenedNodes, node => {
      if (
        node.type &&
        (node.type === SectionHeading ||
          // When hot reloading is enabled, components are wrapped in a
          // ProxyComponent component. This prevents us from doing an
          // equality check on the component type.
          // To workaround this, we will explicitly set the Reference
          // component's displayName prop and compare against that instead.
          (module.hot &&
            (node.type.displayName === "SectionHeading" ||
              node.type.displayName === "Connect(SectionHeading)")))
      ) {
        if (!node.props.exclude) {
          headingIds += 1;
          tableOfContents.push({
            node,
            text: node.props.shortText || node.props.children,
            children: [],
            id: headingIds
          });
          subheadingIds = 0;
        }
      }

      if (
        node.type &&
        (node.type === SectionSubheading ||
          // When hot reloading is enabled, components are wrapped in a
          // ProxyComponent component. This prevents us from doing an
          // equality check on the component type.
          // To workaround this, we will explicitly set the Reference
          // component's displayName prop and compare against that instead.
          (module.hot &&
            (node.type.displayName === "SectionSubheading" ||
              node.type.displayName === "Connect(SectionSubheading)")))
      ) {
        if (!node.props.exclude) {
          subheadingIds += 1;
          tableOfContents[tableOfContents.length - 1].children.push({
            node,
            text: node.props.shortText || node.props.children,
            id: subheadingIds
          });
        }
      }
    });

    return tableOfContents;
  };

  buildReferences = flattenedNodes => {
    this.referenceIds = [];
    this.nextReference = 0;

    const references = [];
    let referenceIds = 0;

    forEach(flattenedNodes, node => {
      if (!node.type) {
        return;
      }

      if (
        node.type === Reference ||
        // When hot reloading is enabled, components are wrapped in a
        // ProxyComponent component. This prevents us from doing an
        // equality check on the component type.
        // To workaround this, we will explicitly set the Reference
        // component's displayName prop and compare against that instead.
        (module.hot &&
          (node.type.displayName === "Reference" ||
            node.type.displayName === "Connect(Reference)"))
      ) {
        let markup = node.props.source || node.props.children;
        if (markup.toString() !== markup) {
          markup = ReactDOMServer.renderToStaticMarkup(markup);
        }

        const duplicateReference = find(
          references,
          ref => ref.markup === markup
        );
        if (duplicateReference) {
          this.referenceIds.push(duplicateReference.id);
        } else {
          referenceIds += 1;
          references.push({
            node,
            markup,
            value: node.props.source || node.props.children,
            href: node.props.href,
            id: referenceIds
          });
          this.referenceIds.push(referenceIds);
        }
      }
    });

    return references;
  };

  constructor(props) {
    super(props);

    // to be built by getChildContext()
    this.references = null;
    this.referenceIds = null;
    this.tableOfContents = null;
    this.nextReference = 0;
    this.nextSectionSubheading = 0;
    this.nextSectionHeading = 0;
  }

  getChildContext() {
    const flattenedNodes = flatten(this.props.children);
    this.tableOfContents = this.buildTableOfContents(flattenedNodes);
    this.references = this.buildReferences(flattenedNodes);

    return {
      assignSectionHeadingId: this.assignSectionHeadingId,
      assignSectionSubheadingId: this.assignSectionSubheadingId,
      assignReferenceId: this.assignReferenceId,
      tableOfContents: this.tableOfContents,
      references: this.references
    };
  }

  render() {
    const { className, children, ...props } = this.props;

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Article.defaultProps = {
  className: undefined
};

Article.childContextTypes = {
  assignSectionHeadingId: PropTypes.func,
  assignSectionSubheadingId: PropTypes.func,
  assignReferenceId: PropTypes.func,
  tableOfContents: PropTypes.array,
  references: PropTypes.array
};
