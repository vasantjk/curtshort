import CompletedIcon from "../components/completedIcon";

const Step4 = () => {
  return (
    <div className="step4">
      <div className="spacingBetweenContent">
        <CompletedIcon />
        <h3 className="headingText">Congratulations,Eren!</h3>
        <p className="captionText">
          you have completed onboarding, you can start using the Eden!
        </p>
      </div>
    </div>
  );
};

export default Step4;
