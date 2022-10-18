const Step2 = () => {
  return (
    <div className="step2">
      <div>
        <h3 className="headingText">Let's set up a home for all your work</h3>
        <p className="captionText">
          you can always create another workspace later.
        </p>
      </div>
      <div className="spacingBetweenContent">
        <div style={{ display: "grid" }}>
          <label className="labelText">Workspace Name</label>
          <input className="inputStyle" placeholder="Eden"></input>
        </div>
        <div style={{ display: "grid" }}>
          <label className="labelText">
            Workspace URL <span className="optionalText">(optional)</span>
          </label>
          <div className="inLineInput">
            <label className="inLineLabel">www.eden.com/</label>
            <input
              style={{ border: "0", outline: "none", padding: "8px" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
