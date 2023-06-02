import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Edit,
  Sort,
  Filter,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../component";
import { customersData, customersGrid } from "../data/dummy";

const Customer = () => {
  return (
    <div className="m-1 md:m-3 md:p-5 p-2 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[Filter, Toolbar, Page, Edit, Selection, Filter, Sort]}
        />
      </GridComponent>
    </div>
  );
};

export default Customer;
