import React from "react";
import { Pie } from "@ant-design/plots";

const DemoChangeData = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setData([
        { type: "Resposta 1", Pessoas: 27 },
        { type: "Resposta 2", Pessoas: 25 },
        { type: "Resposta 3", Pessoas: 18 },
        { type: "Resposta 4", Pessoas: 15 },
        { type: "Resposta 5", Pessoas: 10 },
        { type: "Resposta 6", Pessoas: 40 },
      ]);
    }, 1000);
  }, []);

  const config = {
    data,
    angleField: "Pessoas",
    colorField: "type",
    label: {
      text: "Pessoas",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };

  return <Pie {...config} />;
};

export default DemoChangeData;
