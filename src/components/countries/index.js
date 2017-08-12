/**
 * Created by pdiouf on 2017-05-13.
 */
import Select from "../Select";
import React from "react";

class Countries extends React.Component {
    handleCountrySelection(e) {
        this.setState({ countryCode: e.target.value }, () =>
            console.log("Country  :", this.state.countryCode)
        );
    }

    render() {
        var codes = [];
        console.log(this.props.countries);
        // this.props.countries.reduce(function(a,b,i,tab){
        //     codes[i] = b.properties.code
        // },0)
        return (
            <Select
                name={"countryCode"}
                selectedOption={this.state.countryCode}
                controlFunc={this.handleCountrySelection}
                options={codes}
                placeholder={"Choose a country code"}
            />
        );
    }
}

export default Countries;
