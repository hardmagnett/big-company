<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'



let observer = ref<IntersectionObserver | null>(null)
const rootNode = ref<Element | null>(null)


const handleIntersect = (triggerNode: IntersectionObserverEntry) => {
  if (triggerNode.isIntersecting) {
    console.log('Заходим')
  }
  
  
}
const prepareIntersectionObserver = ()=>{
  
  // console.log(rootNode.value); console.log('^...rootNode.value:')

  // Здесь rootNode уже точно Element.
  let localRootNode = rootNode.value as Element

  const ancestorNode = localRootNode.parentElement; // Можно ещё сделать опциональный prop и передавать его, если этот prop есть.
  // console.log(ancestorNode); console.log('^...ancestorNode:') 
  observer.value = new IntersectionObserver((entries)=>{
    handleIntersect(entries[0])
  }, {
    root: ancestorNode,
    threshold: 0,
    // Если у корневого элемента высота 0, то не сработает. Нужно чтобы срабатывал немного раньше.
    rootMargin: "10px" 
  })
  
  observer.value.observe(localRootNode)
}

onMounted(()=>{
  prepareIntersectionObserver()
})
onBeforeUnmount(()=>{
  observer.value?.disconnect()
  observer.value = null
})
</script>

<template>
  <div class="a-infinity" ref="rootNode">
    
  </div>
</template>

<style scoped>
.a-infinity {
  /*background-color: #aff;*/
  /*height: 100px;*/
}
</style>
