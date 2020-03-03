import React from "react";
import { IonRow, IonCol } from "@ionic/react";

function Weapon(props) {
  function calculateSkill(ability) {
    const calculation = Math.floor((ability - 10) / 2);
    return calculation;
  }

  return (
    <IonRow>
      <IonCol>{props.Name}</IonCol>
      <IonCol>
        {calculateSkill(props.CharacterInfo.Strength) +
          props.CharacterInfo.Proficiency >=
        0
          ? "+ " +
            (calculateSkill(props.CharacterInfo.Strength) +
              props.CharacterInfo.Proficiency)
          : calculateSkill(props.CharacterInfo.Strength) +
            props.CharacterInfo.Proficiency}
      </IonCol>
      <IonCol>
        {calculateSkill(props.CharacterInfo.Strength) >= 0
          ? props.Damage + " + " + calculateSkill(props.CharacterInfo.Strength)
          : props.Damage + " " + calculateSkill(props.CharacterInfo.Strength)}
      </IonCol>
      <IonCol>{props.Range}</IonCol>
      <IonCol>Roll</IonCol>
    </IonRow>
  );
}
export default Weapon;
