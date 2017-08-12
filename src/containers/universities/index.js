/**
 * Created by pdiouf on 2017-03-25.
 */
import React from "react";
import PropTypes from 'prop-types';
import Viewer from "../../components/universities/index";
import {
    QueryRenderer,
    graphql,
} from 'react-relay';

import relayEnvironment from "../../relayEnvironment";
import universitiesQuery from '../../graphql/queries/universities'
class Universities extends React.Component{
    render(){
        return (
            <QueryRenderer
                environment={relayEnvironment}
                query={universitiesQuery}
                variables={{ countryCode: "ca" }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        console.log("infos =>", props)
                        return <Viewer setCurrentPage={this.props.setCurrentPage} universitiesList={props.universities}/>
                    }
                    return <div>Loading</div>;
                }}
            >
            </QueryRenderer>

        )
    }
}


Universities.propTypes = {
  setCurrentPage: PropTypes.func
};
export default Universities
