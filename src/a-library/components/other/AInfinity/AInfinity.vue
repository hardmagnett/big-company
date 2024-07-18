<script setup lang="ts">
/**
 * Вдохновлялся этой статьей и этой библиотекой
 * https://www.netguru.com/blog/infinite-scroll-with-vue.js-and-intersection-observer
 * https://vue3-infinite-loading.netlify.app/guide/quick-demo.html
 * Но переделал всё по своему. Пусть ссылки останутся, на случай если нужно будет доработать.
 */
import {onBeforeUnmount, onMounted, ref} from 'vue'

export type StateHandler = {
  loading: ()=>void;
  loaded: ()=>void;
  completed: ()=>void;
}

const emit = defineEmits<{
  needToLoadMore: [stateHandler: StateHandler]  
}>()

let observer = ref<IntersectionObserver | null>(null)
const rootNode = ref<Element | null>(null)


const state = ref<'empty' | 'loading' | 'loaded' | 'completed'>('empty');

const stateHandler: StateHandler = {
  loading() {
    state.value = "loading";
  },
  async loaded() {
    state.value = "loaded";
    // const parentEl = params.parentEl || document.documentElement;
    // await nextTick();
    // if (top) parentEl.scrollTop = parentEl.scrollHeight - prevHeight;
    // if (isVisible(infiniteLoading.value!, params.parentEl)) params.emit();
  },
  completed() {
    state.value = "completed";
    // observer?.disconnect();
    observer.value?.disconnect()
  },
};

const handleIntersect = (triggerNode: IntersectionObserverEntry) => {
  if (triggerNode.isIntersecting && ['empty', "loaded"].includes(state.value)) {
    stateHandler.loading();
    emit('needToLoadMore', stateHandler)
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
    rootMargin: "10px"  // Если у rootNode высота 0, то не сработает. Нужно чтобы срабатывал немного раньше. 
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
    <!--todo:: сделать красивый лоадер-->
    <p v-if="state==='loading'" style="height: 100px; background-color:#aff;">
      Loading ...
    </p>
    <!--<p>shit</p>-->
    
  </div>
</template>

<style scoped>
.a-infinity {
  /*background-color: #aff;*/
  /*height: 100px;*/
}
</style>
