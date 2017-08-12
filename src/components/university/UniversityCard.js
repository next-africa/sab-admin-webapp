/**
 * Created by pdiouf on 2017-04-03.
 */

import React from "react";

import PropTypes from 'prop-types';
const UniversityCard = props => // Create the card.
(
  <a
    href="#"
    onClick={event => {
      props.setCurrentPage(event, { page: "viewUniversity", id: props.properties.id });
    }}
  >

    <div id={`univ-${+props.properties.id}`} className="card-item">
      <div className={props.color}>
        <div className="card-info">
          <div className="card-name">{props.properties.name}</div>
          <div className="card-desc">{props.properties.address.city}</div>
        </div>
      </div>
      <div className="clear" />
      <div className="languages">{props.properties.languages.length} languages</div>
    </div>
  </a>
);

UniversityCard.propTypes = {
    setCurrentPage: PropTypes.func.isRequire
};
export default UniversityCard;
