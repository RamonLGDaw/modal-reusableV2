import { defineStore } from "pinia";
import { defineComponent } from "vue";
import InfoModalWindow from "../components/Modals/InfoModalWindow.vue";

type VueComponent = ReturnType<typeof defineComponent>;

interface IModalProps {
  component: VueComponent | null;
  props?: object;
}

interface IModalState {
  modalState: IModalProps;
}

const basicState = { component: null, props: {} };

export const useModalStore = defineStore("modal-store", {
  state: (): IModalState => ({ modalState: basicState }),
  actions: {
    openModal(payload: IModalProps) {
      document.body.style.overflow = "hidden";
      this.modalState = { component: payload.component, props: payload.props || {} };
    },
    closeModal() {
      document.body.style.overflow = "auto";
      this.modalState = basicState;
    },
    openInfoModal(info: string) {
      this.openModal({ component: InfoModalWindow, props: { text: info } });
    },
  },
});
