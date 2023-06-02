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
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  AreaPrimaryXAxis,
  AreaPrimaryYAxis,
} from "../../data/dummy";
import { UseStateContext } from "../../context/ContextProvider";
import { Header } from "../../component";

const Area = () => {
  const { currentMode } = UseStateContext();
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg dark:text-white rounded-3xl">
        <Header category="Area" title="Inflation Rate in Percentage" />
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={AreaPrimaryXAxis}
          primaryYAxis={AreaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          style={{ borderRadius: "20px" }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[DataLabel, Legend, DateTime, SplineAreaSeries, Tooltip]}
          />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
};

export default Area;
