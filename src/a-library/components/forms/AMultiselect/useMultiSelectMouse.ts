// import {ref} from "vue";

import type {Ref} from "vue";
import {onBeforeUnmount, onMounted, ref} from "vue";

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
  let popoverToggleHandler = (e: Event): void => {
    let event = e as ToggleEvent
    if (event.newState === 'closed') {
      isFocused.value = false
    }
    
  }
  onMounted(()=>{
    popover.value?.addEventListener("toggle", popoverToggleHandler)
  })
  onBeforeUnmount(()=>{
    popover.value?.removeEventListener("toggle", popoverToggleHandler)
  })
  
  return {
    isFocused,
    selectedValuesClickHandler
  }
}
