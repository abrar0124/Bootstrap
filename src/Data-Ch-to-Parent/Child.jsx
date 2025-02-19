import React from "react";

function Child(Childprops) {
  const handleClick = () => {
    Childprops.Parentprops(
      "Here send data from child component to parent through both component props"
    );
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
}

export default Child;
