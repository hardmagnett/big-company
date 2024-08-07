import type { Ref } from "vue";
import type { Emit } from "./AMultiSelect.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

export function useMultiSelectMouse(
  realInput: Ref<HTMLInputElement | null>,
  popover: Ref<HTMLElement | null>,
  emit: Emit,
) {
  const isFocused = ref(false);

  const selectedValuesClickHandler = () => {
    popover.value?.showPopover();
    isFocused.value = true;
  };
  const closePopover = () => {
    popover.value?.hidePopover();
    isFocused.value = true;
    emit("blur");
  };
  const popoverToggleHandler = (e: Event): void => {
    const event = e as ToggleEvent;
    if (event.newState === "closed") {
      isFocused.value = false;
    }
  };
  onMounted(() => {
    popover.value?.addEventListener("toggle", popoverToggleHandler);
  });
  onBeforeUnmount(() => {
    popover.value?.removeEventListener("toggle", popoverToggleHandler);
  });

  return {
    isFocused,
    selectedValuesClickHandler,
    closePopover,
  };
}
