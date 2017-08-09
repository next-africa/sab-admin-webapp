import React from "react";
import PropTypes from 'prop-types';

import UniversityCard from "./UniversityCard";
const UniverityPreview = props => (
  <div className="cards">
    {props.universitiesList.map(universityData => (
      <UniversityCard
        key={universityData.id}
        {...universityData}
        setCurrentPage={props.setCurrentPage}
      />
    ))}
  </div>
);

UniverityPreview.propType = {
  setCurrentPage: PropTypes.func
};
export default UniverityPreview;
