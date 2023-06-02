import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Filter,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../component";
import { employeesGrid, employeesData } from "../data/dummy";

const Employees = () => {
  return (
    <div className="m-1 md:m-3 md:p-5 p-2 dark:bg-secondary-dark-bg   bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Search, Filter, Toolbar, Page]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
