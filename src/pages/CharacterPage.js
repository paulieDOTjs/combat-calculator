import React from "react";
import { IonContent, IonRow } from "@ionic/react";
import fakeCharacterData from "../Utilities/fakeCharacterData.json";

import Header from "../components/Header/Header";
import CharacterCard from "../components/CharacterCard/CharacterCard";

function CharacterPage() {
  console.log(fakeCharacterData);
  return (
    <>
      <Header PageName="Character Page" />
      <IonContent
        style={{ height: "Calc(100% - 50px" }}
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <IonRow>
          {fakeCharacterData.map(CharacterInfo => {
            return (
              <CharacterCard
                key={CharacterInfo.Name}
                CharacterInfo={CharacterInfo}
              />
            );
          })}
        </IonRow>
      </IonContent>
    </>
  );
}

export default CharacterPage;
