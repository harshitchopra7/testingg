import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function A() {
  const location = useLocation();
  const navigate = useNavigate();

  const updateUrl = () => {
    console.log("location", location);
    const params = new URLSearchParams(location.search);

    params.set("title", "nothing");

    location.search = params.toString();

    console.log("params", params.get("title"));

    console.log("locatioj", location.search);
  };

  return (
    <div>
      <button onClick={updateUrl}>Update url</button>
    </div>
  );
}

export default A;
