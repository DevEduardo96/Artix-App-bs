import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";

import "./css/Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="logo">Artix</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="p-4">
          <IonSearchbar className="busca" placeholder="Digite sua busca..." />
          <h2 className="text-xl font-bold mt-4">Conteúdo principal</h2>
          {/* Add your main content here */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
