import React from "react";
import { RadioSelected, RadioUnselected } from "./RadioButton.styled";

function RadioButton({ selected, selectedSrc, unselectedSrc }) {
  return (
    <>
      {selected ? (
        <RadioSelected src={selectedSrc} alt="Radio button selected" />
      ) : (
        <RadioUnselected src={unselectedSrc} alt="Radio button unselected" />
      )}
    </>
  );
}

export default RadioButton;
