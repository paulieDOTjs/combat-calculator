import React from "react";
import { IonRow, IonCol } from "@ionic/react";

function Weapon(props) {
  return (
    <IonRow>
      <IonCol>{props.Name}</IonCol>
      <IonCol>{props.ToHit >= 0 ? "+ " + props.ToHit : props.ToHit}</IonCol>
      <IonCol>{props.Damage}</IonCol>
      <IonCol>{props.Range}</IonCol>
      <IonCol>Roll</IonCol>
    </IonRow>
  );
}
export default Weapon;
