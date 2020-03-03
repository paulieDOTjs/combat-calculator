import React from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from "@ionic/react";

function Header(props) {
  return (
    <IonHeader style={{ display: "flex" }}>
      <IonButtons>
        <IonMenuButton slot="start" />
      </IonButtons>
      <IonToolbar>
        <IonTitle>{props.PageName}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
