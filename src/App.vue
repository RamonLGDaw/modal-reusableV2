<template>
  <div id="app">
    <button @click="openModal">Open info modal</button>
    <ModalWrapper />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/modalStore";
import ModalWrapper from "@/components/Modals/ModalWrapper.vue";

const store = useModalStore();

function openModal() {
  store.openInfoModal("Gotcha!");
}
</script>

<style scoped>
button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
