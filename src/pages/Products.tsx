import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titulos">Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="p-4">
          <h2 className="text-xl font-bold">Lista de Produtos</h2>
          {/* Add your products list here */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Products;
