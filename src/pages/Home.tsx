import { IonContent } from "@ionic/react";
import React from "react";
import Header from "../components/Header/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header PageName="Combat Calculator" />
      <IonContent>
        <p>home</p>
      </IonContent>
    </>
  );
};

export default Home;
