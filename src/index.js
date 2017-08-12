import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { QueryRenderer, graphql } from "react-relay";
import relayEnvironment from "./relayEnvironment";
import countriesQuery from "./graphql/queries/countries";

ReactDOM.render(
  <QueryRenderer
    environment={relayEnvironment}
    query={countriesQuery}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
          console.log("infos =>", props)
        return <App universitiesList={props.universities} />;
      }
      return <div>Loading</div>;
    }}
  >
  </QueryRenderer>,
  document.getElementById("root")
);
