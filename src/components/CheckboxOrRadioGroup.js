/**
 * Created by pdiouf on 2017-03-12.
 */
import React from "react";
import PropTypes from 'prop-types';
const CheckboxOrRadioGroup = props => (
  <div>
    <label className="university-form">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(option => {
        return (
          <label key={option} className="university-form capitalize">
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={option}
              checked={props.selectedOptions.indexOf(option) > -1}
              type={props.type}
            />
            {" "}
            {option}
          </label>
        );
      })}
    </div>
  </div>
);

CheckboxOrRadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array,
  controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
