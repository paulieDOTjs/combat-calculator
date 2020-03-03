import React from "react";
import { IonCol } from "@ionic/react";

function Skill(props) {
  function calculateSkill(ability) {
    const calculation = Math.floor((ability - 10) / 2);
    return calculation;
  }

  return (
    <>
      <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
        {props.Skill}
      </IonCol>
      <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
        {/* If proficient in add proficiency bonus */}
        {props.Proficient.find(element => element === props.Skill) !== undefined
          ? calculateSkill(props.Modifier) + props.Proficiency
          : calculateSkill(props.Modifier)}
      </IonCol>
      <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
        roll
      </IonCol>
    </>
  );
}

export default Skill;
