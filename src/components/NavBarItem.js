/**
 * Created by pdiouf on 2017-03-23.
 */
/**
 * Created by pdiouf on 2017-03-23.
 */

import React from "react";
import NavBarLink from "./NavBarLink";
import PropTypes from 'prop-types';
const NavBarItem = props => (
  <li>
    <NavBarLink
      style={props.style}
      url={props.url}
      text={props.text}
      controlFunc={props.controlFunc}
    />

  </li>
);

NavBarItem.PropTypes = {
  controlFunc: PropTypes.func,
  url: PropTypes.string,
  text: PropTypes.string.required,
  style: PropTypes.string.required
};

export default NavBarItem;
