import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./css/Home.css";

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark" className="barra-superior">
          <h1 className="txbarra-superior">barra superior</h1>
        </IonToolbar>
        <IonToolbar>
          <IonTitle className="titulos">Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="p-4">
          <h2 className="text-xl font-bold">Seus Favoritos</h2>
          {/* Add your favorites list here */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
