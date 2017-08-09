/**
 * Created by pdiouf on 2017-04-05.
 */
import React from "react";
import University from "../../components/university/index";
import PropTypes from 'prop-types';
import {
    createFragmentContainer,
    graphql,
} from 'react-relay';
const ViewUniversity = props => (
  <University
    setCurrentPage={props.setCurrentPage}
    universitiesList={props.universitiesList}
    currentPageId={props.currentPageId}
  />
);
ViewUniversity.propTypes = {
  setCurrentPage: PropTypes.func
};
export default createFragmentContainer(University,{
    viewer : graphql`
    fragment university_viewer on University{
      properties{
        name
        tuition {
          amount
          link
        }
        address {
          city
          state
          postalCode
          line
        }
      }
    }
  `
});
