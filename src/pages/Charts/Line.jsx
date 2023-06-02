import React from "react";
import { ChatHeader, Header, LineChart } from "../../component";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg dark:text-white rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
