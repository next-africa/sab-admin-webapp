import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { QueryRenderer, graphql } from "react-relay";
import relayEnvironment from "./relayEnvironment";
import countryQuery from "./graphql/queries/country";

ReactDOM.render(
  <QueryRenderer
    environment={relayEnvironment}
    query={countryQuery}
    variables={{ code: "ca" }}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <App />;
      }
      return <div>Loading</div>;
    }}
  >
    <App />
  </QueryRenderer>,
  document.getElementById("root")
);
