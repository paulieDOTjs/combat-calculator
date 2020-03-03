import React from "react";
import "./Menu.css";
import { IonMenu, IonItem, IonContent, IonMenuToggle } from "@ionic/react";
import { withRouter } from "react-router";

function Menu({ history }) {
  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonMenuToggle autoHide={false}>
          <IonItem
            className="MenuItem"
            onClick={() => history.push("/")}
            color="primary"
          >
            Main
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem
            className="MenuItem"
            onClick={() => history.push("/characters")}
            color="primary"
          >
            Characters
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem
            className="MenuItem"
            onClick={() => history.push("/saved")}
            color="primary"
          >
            Saved
          </IonItem>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  );
}

export default withRouter(Menu);
