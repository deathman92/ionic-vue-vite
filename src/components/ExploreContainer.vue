<template>
  <IonCard class="ion-text-center ion-padding">
    <IonTitle size="large">{{ name }}</IonTitle>
    <p>
      Explore
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
      >
        UI Components
      </a>
    </p>
  </IonCard>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
