import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";

const Chart = () => {
  const {
    state: { stats },
  } = useContext(GlobalContext);

  const data = {
    labels: ["Deaths", "Recovered", "Confirmed"],
    datasets: [
      {
        label: "# of Votes",
        data: [stats.deaths, stats.recovered, stats.confirmed],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="ChartContainer">
      <div className="Header">{/* <h1>Doughnut Chart</h1> */}</div>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
