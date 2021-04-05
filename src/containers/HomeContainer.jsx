import React, { useState, useEffect } from "react";
import ComponentHome from "../components/ComponentHome";

function HomeContainer() {
  const [local, setLocal] = useState();
  const [switchSearch, setSwitchSearch] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("links")) === null) {
      setLocal([]);
    } else {
      setLocal(JSON.parse(localStorage.getItem("links")));
    }
  }, [switchSearch]);

  return (
    <>
      <ComponentHome
        local={local}
        setSwitchSearch={setSwitchSearch}
        switchSearch={switchSearch}
      />
    </>
  );
}

export default HomeContainer;
