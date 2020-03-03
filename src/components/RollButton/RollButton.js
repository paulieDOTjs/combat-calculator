import React from "react";

function RollButton({ setRecentRoll, modifier }) {
  console.log(setRecentRoll);
  let result;
  function rollTheDie() {
    result = Math.floor(Math.random() * 20 + 1);
  }

  rollTheDie();

  return (
    <button
      onClick={() =>
        setRecentRoll(result + " + " + modifier + " = " + (result + modifier))
      }
    >
      Roll
    </button>
  );
}

export default RollButton;
