/**
 * Created by pdiouf on 2017-04-04.
 */
import React from "react";
import UniversityForm from "../components/UniversityForm";
import PropTypes from 'prop-types';
const NewUniversity = props => (
  <div className="NewUniversity">
    <h4 className="page-header">New University </h4>
    <UniversityForm
      universitiesList={props.universitiesList}
      {...props}
      setCurrentPage={props.setCurrentPage}
    />
  </div>
);

NewUniversity.propTypes = {
  setCurrentPage: PropTypes.func
};
export default NewUniversity;
