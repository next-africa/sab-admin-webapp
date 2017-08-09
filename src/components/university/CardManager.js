import React from 'react'
import UniversityPreview from "./UniversityPreview"
// The card manager/holder.
var app = {};
class CardManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            universities: []
        };
    }
    // When our component mounts we should update the universities with the initial ones.
    componentDidMount() {
        var _self = this;
        this.setState({ universities: this.props.universitiesList });

        // We'll just cheat a bit and set an interval to watch changes.
        setInterval(function() {
            if (app.dirty) {
                app.dirty = false;
                _self.setState({ universities: this.props.universitiesList });
            }
        }, 500);
    }

    // Render our cycle of universities.
    render() {
        return (
            <div className="card-cycle">
                <UniversityPreview
                    universitiesList={this.props.universitiesList}
                    setCurrentPage={this.props.setCurrentPage}
                />
            </div>
        );
    }
}/**
 * Created by pdiouf on 2017-08-05.
 */

export  default CardManager;
