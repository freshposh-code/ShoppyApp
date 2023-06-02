import React from "react";
import { Header } from "../component";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-1 md:m-3 md:p-5 p-2 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
      </div>
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <ColorPickerComponent
            id="inline-pallete"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <ColorPickerComponent
            id="inline-pallate"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
