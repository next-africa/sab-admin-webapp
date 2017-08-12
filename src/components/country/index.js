/**
 * Created by pdiouf on 2017-08-09.
 */
import React from "react";
import  Flag from 'react-flags';

const Country = props => (

    <div>
        <span id={`${props.code}_icon`}>
            <Flag
                name={props.code}
                format="png"
                pngSize={64}
                shiny={true}
                alt={`${props.name} Flag`}
            />
        </span>
        <span id={props.code}>{props.code}</span>
    </div>
);

export default Country;
