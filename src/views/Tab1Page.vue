<template>
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <ExploreContainer name="Tab 1 page" />
    </IonContent>
  </IonPage>
</template>
