import { Line } from "@ant-design/plots";
import React from "react";

const DemoSegmentedLine = () => {
  const data = [
    { day: "1", value: 3, type: "Lon" },
    { day: "2", value: 5, type: "Lon" },
    { day: "3", value: 4, type: "Lon" },
    { day: "4", value: 6, type: "Lon" },
    { day: "5", value: 5, type: "Lon" },
    { day: "6", value: 4, type: "Lon" },
    { day: "7", value: 3, type: "Lon" },
    { day: "8", value: 5, type: "Lon" },
    { day: "9", value: 4, type: "Lon" },
    { day: "10", value: 3, type: "Bor" },
    { day: "11", value: 4, type: "Bor" },
    { day: "12", value: 5, type: "Bor" },
    { day: "13", value: 3, type: "Bor" },
    { day: "14", value: 6, type: "Bor" },
    { day: "15", value: 2, type: "Bor" },
    { day: "16", value: 4, type: "Bor" },
    { day: "17", value: 6, type: "Bor" },
    { day: "18", value: 5, type: "Bor" },
    { day: "19", value: 3, type: "Bor" },
    { day: "20", value: 5, type: "Bor" },
    { day: "21", value: 4, type: "Bor" },
    { day: "22", value: 1, type: "Bor" },
    { day: "23", value: 2, type: "Bor" },
    { day: "24", value: 4, type: "Bor" },
    { day: "25", value: 3, type: "Bor" },
    { day: "26", value: 6, type: "Bor" },
    { day: "27", value: 4, type: "Bor" },
    { day: "28", value: 5, type: "Bor" },
    { day: "29", value: 6, type: "Bor" },
    { day: "30", value: 2, type: "Bor" },
    { day: "31", value: 5, type: "Bor" },
  ];

  const config = {
    data,
    xField: "day",
    yField: "value",
    color: "#2688FF", 
    style: {
      lineWidth: 2,
    },
    interaction: {
      tooltip: {
        render: (e, { title, items }) => {
          const list = items.filter((item) => item.value);
          return (
            <div key={title}>
              <h4>{title}</h4>
              {list.map((item) => {
                const { name, value } = item;
                return (
                  <div key={name}>
                    <div
                      style={{
                        margin: 0,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <span>{name}</span>
                      </div>
                      <b>{value}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    },
    legend: false,
    yAxis: {
      min: 1,
      max: 6,
      ticks: [1, 2, 3, 4, 5, 6],
      title: {
        text: "Valor", 
      },
    },
    xAxis: {
      title: {
        text: "Dias do Mês", 
      },
      tickInterval: 1,
    },
  };

  return <Line {...config} />;
};

export default DemoSegmentedLine;
