import React from "react";

export const HideOrNotHide = () => {
  const [visible, setVisible] = React.useState(0);
  if (visible === 0) {
    return (
      <div>
        <button onClick={() => setVisible(1)}> Effacer le texte </button>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          accusamus.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setVisible(0)}> Afficher le texte </button>
      </div>
    );
  }
};
