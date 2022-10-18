const Step1 = () => {
  return (
    <div className="step1">
      <div>
        <h3 className="headingText">Welcome! First things first...</h3>
        <p className="captionText">you can always change them later.</p>
      </div>
      <div className="spacingBetweenContent">
        <div style={{ display: "grid" }}>
          <label className="labelText">Full Name</label>
          <input className="inputStyle" placeholder="Steve Jobs"></input>
        </div>
        <div style={{ display: "grid" }}>
          <label className="labelText">Display Name</label>
          <input className="inputStyle" placeholder="Steve"></input>
        </div>
      </div>
    </div>
  );
};

export default Step1;
