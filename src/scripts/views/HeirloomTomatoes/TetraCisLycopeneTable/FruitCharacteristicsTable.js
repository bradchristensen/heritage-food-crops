import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Range({ from, to }) {
  return (
    <Fragment>
      <td style={{ borderRight: "none", textAlign: "right" }}>{from}</td>
      <td
        style={{
          borderLeft: "none",
          borderRight: "none",
          paddingLeft: 0,
          paddingRight: 0,
          textAlign: "center"
        }}
      >
        to
      </td>
      <td style={{ borderLeft: "none", whiteSpace: "nowrap" }}>{to}</td>
    </Fragment>
  );
}

Range.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default function FruitCharacteristicsTable({ clientWidth }) {
  const descriptionText = clientWidth > 800 ? "Description:" : "Desc:";
  return (
    <table
      style={{ margin: 0, maxWidth: "700px", width: "100%" }}
      className="with-borders tomato-table"
    >
      <thead>
        <tr>
          <th>Size:</th>
          <th>{descriptionText}</th>
          <th colSpan="3" style={{ textAlign: "center" }}>
            Weight:
          </th>
          <th colSpan="3" style={{ textAlign: "center" }}>
            Diameter:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Small</td>
          <td>Cherry</td>
          <Range from="25" to="55 g" />
          <Range from="2" to="4 cm" />
        </tr>
        <tr>
          <td>Medium</td>
          <td>Plum</td>
          <Range from="40" to="130 g" />
          <Range from="4" to="6 cm" />
        </tr>
        <tr>
          <td>Medium-large</td>
          <td>Slicing</td>
          <Range from="130" to="220 g" />
          <Range from="6" to="10 cm" />
        </tr>
        <tr>
          <td>Large</td>
          <td>Beefsteak</td>
          <Range from="185" to="220 g" />
          <Range from="7" to="10 cm" />
        </tr>
        <tr>
          <td>Extra-large</td>
          <td>Beefsteak</td>
          <Range from="220" to="320 g" />
          <Range from="10" to="14 cm" />
        </tr>
        <tr>
          <td>Giant</td>
          <td>Beefsteak</td>
          <td colSpan="3" style={{ textAlign: "center" }}>
            320 g +
          </td>
          <td colSpan="3" style={{ textAlign: "center" }}>
            14 cm +
          </td>
        </tr>
      </tbody>
    </table>
  );
}

FruitCharacteristicsTable.propTypes = {
  clientWidth: PropTypes.number.isRequired
};
