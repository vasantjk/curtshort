//NPM PACKAGE
import React from "react";
//FILE IMPORT
import "./App.css";
import StepperIndicator from "./components/stepperIndicatior";
import Step1 from "./screens/step1";
import Step2 from "./screens/step2";
import Step3 from "./screens/step3";
import Step4 from "./screens/step4";
import EdenIcon from "./curtShorts.png";
function App() {
  const [stepper, setStepper] = React.useState(0);
  return (
    <div className="App">
      <div className="formContent">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img src={EdenIcon} alt="icon" width="40" height="40" />
          <h1 className="titleName">Eden</h1>
        </div>

        <StepperIndicator ColorProp={stepper} />
        {stepper === 0 && <Step1 />}
        {stepper === 1 && <Step2 />}
        {stepper === 2 && <Step3 />}
        {stepper === 3 && <Step4 />}
        <div>
          <button
            className="buttonStyle"
            onClick={() => setStepper((pre) => (pre !== 3 ? pre + 1 : 0))}
          >
            {stepper === 3 ? "Launch Eden" : "Create WorkSpace"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
