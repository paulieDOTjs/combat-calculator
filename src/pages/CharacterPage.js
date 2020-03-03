import React from "react";
import { IonContent, IonList, IonItem, IonIcon } from "@ionic/react";
import Header from "../components/Header/Header";

function CharacterPage() {
  return (
    <>
      <Header PageName="Character Page" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon name="paper-plane" slot="start" />
            Hi
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}

export default CharacterPage;
