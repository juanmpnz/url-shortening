import React from "react";

import Banner from "../components/Banner";
import SearchContainer from "../containers/SearchContainer";
import HomeComponent from "../components/HomeComponent";

function ComponentHome({ local, setSwitchSearch, switchSearch }) {
  return (
    <div>
      <Banner />
      <SearchContainer
        setSwitchSearch={setSwitchSearch}
        switchSearch={switchSearch}
      />
      <HomeComponent
        local={local || []}
        setSwitchSearch={setSwitchSearch}
        switchSearch={switchSearch}
      />
    </div>
  );
}

export default ComponentHome;
