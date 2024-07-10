// import {ref} from "vue";

import type {Ref} from "vue";
import {ref} from "vue";

export function useMultiSelectMouse(
  realInput: Ref<HTMLInputElement | null>,
  popover: Ref<HTMLElement | null>
  
){

  let isFocused = ref(false)
  // const realInput = ref<HTMLInputElement | null>(null)
  
  const selectedValuesClickHandler = () => {
    popover.value?.showPopover()
    isFocused.value = true
  }
  
  return {
    isFocused,
    selectedValuesClickHandler
  }
}
