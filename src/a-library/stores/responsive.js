import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getCSSVariable from "@/a-library/helpers/DOM/getCSSVariable"

export const useResponsiveStore = defineStore('responsive', ()=>{
  let documentElement = document.documentElement

  let documentWidth = ref(documentElement.clientWidth)

  window.addEventListener('resize', ()=>{
    let newVal = documentElement.clientWidth
    documentWidth.value = newVal
  });

  const isEqualOrMoreThan = computed((state) => {
    return (breakpointVariableName) => {
      let bpValue = getCSSVariable(breakpointVariableName);
      // let isEqualOrMoreThan = state.documentWidth >= bpValue
      // let isEqualOrMoreThan = state.documentWidth >= bpValue
      let isEqualOrMoreThan = documentWidth.value >= bpValue
      return isEqualOrMoreThan
    }
  })

  return { isEqualOrMoreThan }

})
