import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
const Step3 = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div className="step3">
      <div>
        <h3 className="headingText">How are you planning to use Eden?</h3>
        <p className="captionText">
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="gridTemplate spacingBetweenContent">
        <div
          className={`card ${selectedCard === 0 && "card_selected"}`}
          onClick={() => setSelectedCard(0)}
        >
          <div>
            <PersonIcon />
            <h3 className="subhead">For myself</h3>
            <p className="subcontent">
              Write better.Think more clearly.Stay organized.
            </p>
          </div>
        </div>
        <div
          className={`card ${selectedCard === 1 && "card_selected"}`}
          onClick={() => setSelectedCard(1)}
        >
          <GroupsIcon />
          <h3 className="subhead">With my team</h3>
          <p className="subcontent">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
