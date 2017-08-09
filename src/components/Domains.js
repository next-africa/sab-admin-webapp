/**
 * Created by pdiouf on 2017-04-09.
 */
import React from "react";
import DomainPreview from "./DomainPreview";
import CreateReactClass from 'create-react-class'
var Domains = CreateReactClass({
  render: function() {
    return <DomainPreview domains={this.props.domains} />;
  }
});

export default Domains;
