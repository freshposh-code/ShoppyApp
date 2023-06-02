import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../component";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-1 md:m-3 md:p-5 p-2 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        {/* <EditorData /> */}
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
