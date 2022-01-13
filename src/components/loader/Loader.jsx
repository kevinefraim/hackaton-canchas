import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center m-5 p-5">
      <CircularProgress />
    </div>
  );
}
