import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getValueOfCSSVariableAsNumber} from "@/a-library/helpers/DOM/getCSSVariable"

/**
 * Вообще хранилище не должно знать ничего о DOM.
 * Здесь, в порядке исключения, хранилище знает о DOM,
 * потому-что данные об адаптивном состоянии в реактивном виде могут понадобиться любому из компонентов.
 * Возможно в будущем перенесу это куда-нибудь. А пока-что пусть лежит здесь.
 */
let timerForTransition: number | null = null
function stopTransitionsOnDocumentResize(){
  const bodyClasses = document.body.classList;
  const classToToggle = 'mod--stop-transitions'
  if (timerForTransition) {
    clearTimeout(timerForTransition);
    timerForTransition = null;
  }
  else {
    bodyClasses.add(classToToggle);
  }
  timerForTransition = setTimeout(() => {
    bodyClasses.remove(classToToggle);
    timerForTransition = null;
  }, 100);
}

export const useResponsiveStore = defineStore('responsive', ()=>{
  const documentElement = document.documentElement

  const documentWidth = ref(documentElement.clientWidth)

  window.addEventListener('resize', ()=>{
    stopTransitionsOnDocumentResize()

    const newVal = documentElement.clientWidth
    documentWidth.value = newVal
  });

  const isEqualOrMoreThan = computed((state) => {
    return (breakpointVariableName: string) => {
      const bpValue = getValueOfCSSVariableAsNumber(breakpointVariableName);
      const isEqualOrMoreThan = documentWidth.value >= bpValue
      return isEqualOrMoreThan
    }
  })
  const isMdOrMore = computed((state) => {
    return ()=>{
      return isEqualOrMoreThan.value('--bp-md')
    }

  })
  return { isMdOrMore }

})
