import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage, IonSplitPane } from "@ionic/react";
import Home from "./pages/Home";
import CharacterPage from "./pages/CharacterPage";
import SavedPage from "./pages/SavedPage";
import Menu from "./components/Menu/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <BrowserRouter>
    <IonApp>
      <IonSplitPane contentId="main">
        <Menu />
        <IonPage id="main">
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/characters" component={CharacterPage} />
              <Route path="/saved" component={SavedPage} />
            </Switch>
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  </BrowserRouter>
);

export default App;
