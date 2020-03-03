import React from "react";
import { IonCol } from "@ionic/react";
import RollButton from "../RollButton/RollButton";

function SavingThrow(props) {
  function calculateSkill(ability) {
    const calculation = Math.floor((ability - 10) / 2);
    return calculation;
  }

  const finalModifier =
    props.Proficient.find(element => element === props.Ability) !== undefined
      ? calculateSkill(props.Modifier) + props.Proficiency
      : calculateSkill(props.Modifier);
      
  return (
    <>
      <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
        {props.Ability}
      </IonCol>
      <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
        {finalModifier}
      </IonCol>
      <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
        <RollButton
          modifier={finalModifier}
          setRecentRoll={props.setRecentRoll}
        />
      </IonCol>
    </>
  );
}

export default SavingThrow;
