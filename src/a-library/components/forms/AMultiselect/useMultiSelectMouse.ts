// import {ref} from "vue";

import type {Ref} from "vue";

export function useMultiSelectMouse(realInput: Ref<HTMLInputElement | null>){

  // const realInput = ref<HTMLInputElement | null>(null)
  
  const selectedValuesClickHandler = () => {
    realInput.value?.focus()
    console.log(realInput.value); console.log('^...realInput.value:') 
  }
  
  return {
    selectedValuesClickHandler
  }
}
