/**
 * Created by pdiouf on 2017-03-23.
 */
/**
 * Created by pdiouf on 2017-03-23.
 */

import React from "react";
import PropTypes from 'prop-types';
const NavBarLink = props => (
  <a onClick={props.controlFunc} key={props.key} href={props.url}>
    <span className={props.style} />
    {props.text}
  </a>
);

NavBarLink.PropTypes = {
  controlFunc: PropTypes.func
};

export default NavBarLink;
