/**
 * Created by pdiouf on 2017-04-05.
 */
import React from "react";
import University from "../../components/university/index";
import universityQuery from '../../graphql/queries/university'
import {
    QueryRenderer,
    graphql,
} from 'react-relay';
import relayEnvironment from "../../relayEnvironment";

class Viewer extends React.Component {
    render() {
        return (
        <QueryRenderer
            environment={relayEnvironment}
            query={universityQuery}
            variables={{countryCode: this.props.selectedCountry, universityId: this.props.currentPageId}}
            render={({error, props}) => {
                if (error) {
                    return <div>{error.message}</div>;
                } else if (props) {
                    console.log("univerisyt", props);

                    return <University
                        setCurrentPage={props.setCurrentPage}
                        university={props.university}
                        currentPageId={props.currentPageId}
                    />

                }
                return <div>Loading</div>;
            }}

        >
        </QueryRenderer>
        )
    }
}

export default Viewer;
