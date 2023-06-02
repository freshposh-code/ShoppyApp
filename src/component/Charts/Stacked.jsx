import React from "react";
import {
  ChartComponent,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import {
  stackedPrimaryYAxis,
  stackedPrimaryXAxis,
  stackedCustomSeries,
} from "../../data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <>
      <ChartComponent
        width={width}
        height={height}
        id="stack-chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[Legend, Tooltip, Category, StackingColumnSeries]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
};

export default Stacked;
