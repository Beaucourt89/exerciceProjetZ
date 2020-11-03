import React from "react";

export const HideOrNotHide = () => {
  const [visibility, setVisibility] = React.useState(true);
  return (
    <div>
      <button onClick={() => setVisibility(!visibility)}>
        {visibility ? "Hide content" : "Reveveal content"}
      </button>
      {visibility ? <p>coucou</p> : null}
    </div>
  );
};
