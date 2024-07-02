<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="store.modalState.component"
        class="modal-wrapper"
        @click.self="store.closeModal"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <component :is="store.modalState.component" v-bind="store.modalState.props" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useModalStore } from "@/stores/modalStore";

const store = useModalStore();

function keydownListener(event: KeyboardEvent) {
  if (event.key === "Escape") store.closeModal();
}

onMounted(() => {
  document.addEventListener("keydown", keydownListener);
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownListener);
});
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
