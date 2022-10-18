const StepperIndicator = ({ ColorProp }) => {
  const jsxStyle = {
    stepperInde: {
      position: "relative",
      flexGrow: "1",
      placeContent: "center",
      display: "grid",
    },
    horizontalLineForFirst: {
      position: "absolute",
      top: "20%",
      left: "50%",
      width: "50%",
      zIndex: "-1",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      borderBottom: "1px solid #C1C9DB",
    },
    horizontalLineForLast: {
      position: "absolute",
      top: "20%",
      width: "50%",
      zIndex: "-1",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      borderBottom: "1px solid #C1C9DB",
    },
    horizontalLineForRemaining: {
      position: "absolute",
      top: "20%",
      width: "100%",
      zIndex: "-1",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      borderBottom: "1px solid #C1C9DB",
    },
  };
  return (
    <>
      <div>
        <div className="indicatorBox">
          <div style={jsxStyle.stepperInde}>
            <div
              className="indicator"
              style={{
                backgroundColor: ColorProp >= 0 && "#664DE5",
                color: ColorProp >= 0 && "#fff",
                transition: "color  1.2s,background-color 1.2s",
              }}
            >
              1
            </div>
            <hr
              style={{
                ...jsxStyle.horizontalLineForFirst,
                borderTop: ColorProp >= 0 && "1.5px solid #664DE5",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            />
          </div>
          <div style={jsxStyle.stepperInde}>
            <div
              className="indicator"
              style={{
                backgroundColor: ColorProp >= 1 && "#664DE5",
                color: ColorProp >= 1 && "#fff",
                transition: "color  1.2s,background-color 1.2s",
              }}
            >
              2
            </div>
            <hr
              style={{
                ...jsxStyle.horizontalLineForRemaining,
                borderTop: ColorProp >= 1 && "1.5px solid #664DE5",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            />
          </div>
          <div style={jsxStyle.stepperInde}>
            <div
              className="indicator"
              style={{
                backgroundColor: ColorProp >= 2 && "#664DE5",
                color: ColorProp >= 2 && "#fff",
                transition: "color  1.2s,background-color 1.2s",
              }}
            >
              3
            </div>
            <hr
              style={{
                ...jsxStyle.horizontalLineForRemaining,
                borderTop: ColorProp >= 2 && "1.5px solid #664DE5",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            />
          </div>
          <div style={jsxStyle.stepperInde}>
            <div
              className="indicator"
              style={{
                backgroundColor: ColorProp >= 3 && "#664DE5",
                color: ColorProp >= 3 && "#fff",
                transition: "color  1.2s,background-color 1.2s",
              }}
            >
              4
            </div>
            <hr
              style={{
                ...jsxStyle.horizontalLineForLast,
                borderTop: ColorProp >= 3 && "1.5px solid #664DE5",
                borderBottom: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StepperIndicator;
