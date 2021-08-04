import React, { useContext } from "react";

import CustomizationOptions from "./CustomizationOptions";
import Stats from "./Stats";
import Chart from "./Chart";
import { GlobalContext } from "../context/GlobalState";
import Loader from "./Loader";

const Main = () => {
  const {
    state: {
      isLoading,
      UIState: { showStats, showChart },
    },
  } = useContext(GlobalContext);

  return (
    <>
      <CustomizationOptions />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {showStats && <Stats />}
          {showChart && <Chart />}
        </>
      )}{" "}
    </>
  );
};

export default Main;
