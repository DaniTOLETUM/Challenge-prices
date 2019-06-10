import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <React.Fragment>
      Oh oh ! Something went wrong :(
      <br />
      The requested page doesn't exist !<br />
      Go back to <Link to="/">home page</Link>.
    </React.Fragment>
  );
}
