import React from "react";
import { IonContent, IonList, IonItem, IonIcon } from "@ionic/react";
import Header from "../components/Header/Header";

function SavedPage() {
  return (
    <>
      <Header PageName="Saved Page" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon name="paper-plane" slot="start" />
            List of parties
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}

export default SavedPage;
