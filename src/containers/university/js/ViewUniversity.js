/**
 * Created by pdiouf on 2017-04-05.
 */
import React from "react";
import University from "../../../components/university/js/University";

const ViewUniversity = props => (
  <University
    setCurrentPage={props.setCurrentPage}
    universitiesList={props.universitiesList}
    currentPageId={props.currentPageId}
  />
);
ViewUniversity.propTypes = {
  setCurrentPage: React.PropTypes.func
};
export default University;
