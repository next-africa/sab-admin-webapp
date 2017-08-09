/**
 * Created by pdiouf on 2017-03-25.
 */
import React from "react";
import PropTypes from 'prop-types';
import View from "../../components/universities/index";
import {
    createFragmentContainer,
    graphql,
} from 'react-relay';


class Universities extends React.Component{
    render(){
        console.log("iciicicic= >", this.props.viewer)
        return (
            <View setCurrentPage={this.props.setCurrentPage} universitiesList={this.props.universitiesList}/>
        )
    }
}


Universities.propTypes = {
  setCurrentPage: PropTypes.func
};
export default createFragmentContainer(Universities,{
    viewer : graphql`
        fragment universities_viewer on University{
            properties{
              name
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
