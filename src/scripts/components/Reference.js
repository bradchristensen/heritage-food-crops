import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Reference extends PureComponent {
  static displayName = "Reference";

  constructor(props, context) {
    super(props, context);

    this.state = {
      id: context.assignReferenceId()
    };
  }

  render() {
    return (
      <sup className="reference-sup">
        <a href={`#cite-${this.state.id}`} data-scroll>
          {`[${this.state.id}]`}
        </a>
      </sup>
    );
  }
}

Reference.contextTypes = {
  assignReferenceId: PropTypes.func.isRequired
};
