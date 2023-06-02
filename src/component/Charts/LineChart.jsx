import React from "react";
import {
  ChartComponent,
  DataLabel,
  Legend,
  Tooltip,
  DateTime,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { UseStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  const { currentMode } = UseStateContext();
  return (
    <>
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[DataLabel, LineSeries, Legend, DateTime, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
};

export default LineChart;
