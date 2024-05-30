import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getCSSVariable from "@/a-library/helpers/DOM/getCSSVariable"

/**
 * Вообще хранилище не должно знать ничего о DOM.
 * Здесь, в порядке исключения, хранилище знает о DOM,
 * потому-что данные об адаптивном состоянии в реактивном виде могут понадобиться любому из компонентов.
 * Возможно в будущем перенесу это куда-нибудь. А пока-что пусть лежит здесь.
 */

function stopTransitionsOnDocumentResize(){
  const bodyClasses = document.body.classList;
  const classToToggle = 'mod--stop-transitions'
  if (stopTransitionsOnDocumentResize.timer) {
    clearTimeout(stopTransitionsOnDocumentResize.timer);
    stopTransitionsOnDocumentResize.timer = null;
  }
  else {
    bodyClasses.add(classToToggle);
  }
  stopTransitionsOnDocumentResize.timer = setTimeout(() => {
    bodyClasses.remove(classToToggle);
    stopTransitionsOnDocumentResize.timer = null;
  }, 100);
}
stopTransitionsOnDocumentResize.timer = null

export const useResponsiveStore = defineStore('responsive', ()=>{
  let documentElement = document.documentElement

  let documentWidth = ref(documentElement.clientWidth)

  window.addEventListener('resize', ()=>{
    stopTransitionsOnDocumentResize()

    let newVal = documentElement.clientWidth
    documentWidth.value = newVal
  });

  const isEqualOrMoreThan = computed((state) => {
    return (breakpointVariableName) => {
      let bpValue = getCSSVariable(breakpointVariableName);
      let isEqualOrMoreThan = documentWidth.value >= bpValue
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
