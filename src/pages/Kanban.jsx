import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { Header } from "../component";
import { kanbanGrid, kanbanData } from "../data/dummy";

const Kanban = () => {
  return (
    <div className="m-1 md:m-3 md:p-5 p-2 bg-white rounded-3xl">
      <Header category="Page" title="Kanban" />
      <KanbanComponent
        id="Kanban"
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id",
        }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
