/**
 * Created by pdiouf on 2017-03-25.
 */
import React from "react";
import { Button } from "react-bootstrap";
import If from "../If";
import CardManager from "../../components/university/CardManager";
import PropTypes from 'prop-types';

var app = {};
// Some initial universities to start with.
const styles = {
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  }
};
app.dirty = false;

// The card application.
const Universities = props => (
  <div>
    <div className="btnNewUniversity">
      <Button
        bsStyle="primary"
        bsSize="large"
        className="pull-right"
        onClick={event => {
          props.setCurrentPage(event, { page: "newUniversity" });
        }}
      >
        New University

      </Button>
    </div>
    <h3>Universitiesss</h3>
    <div style={styles.divider} />

    <If items={props.universitiesList}>

      <CardManager
        universitiesList={props.universitiesList}
        setCurrentPage={props.setCurrentPage}
      />
    </If>

  </div>
);

Universities.propTypes = {
  setCurrentPage: PropTypes.func
};
export default Universities;
