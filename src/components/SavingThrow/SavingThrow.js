import React from "react";
import { IonCol } from "@ionic/react";

function SavingThrow(props) {
  return (
    <>
      <IonCol sizeXs="5" sizeSm="3" sizeLg="5" sizeXl="3">
        {props.Ability}
      </IonCol>
      <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
        {props.Proficient.find(element => element === props.Ability) !==
        undefined
          ? props.Modifier + props.Proficiency
          : props.Modifier}
      </IonCol>
      <IonCol sizeXs="3" sizeSm="1" sizeLg="3" sizeXl="1">
        Roll
      </IonCol>
    </>
  );
}

export default SavingThrow;
