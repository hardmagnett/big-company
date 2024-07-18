<script setup lang="ts">
/**
 * Вдохновлялся этой статьей и этой библиотекой
 * https://www.netguru.com/blog/infinite-scroll-with-vue.js-and-intersection-observer
 * https://vue3-infinite-loading.netlify.app/guide/quick-demo.html
 * Но переделал всё по своему. Пусть ссылки останутся, на случай если нужно будет доработать.
 */
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'
import ALoader from "@/a-library/components/other/ALoader/ALoader.vue";

export interface Props {
  resetId?: number,
}
const props = withDefaults(defineProps<Props>(), {
  resetId: 0,
})

watch(()=>props.resetId, ()=>{
    stateHandler.empty()
  }
)

export type StateHandler = {
  empty: ()=>void;
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
  empty() {
    state.value = "empty";
    disconnectIntersectionObserver();
    prepareIntersectionObserver();
  },
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
const disconnectIntersectionObserver = ()=>{
  observer.value?.disconnect()
}

onMounted(()=>{
  prepareIntersectionObserver()
})
onBeforeUnmount(()=>{
  disconnectIntersectionObserver();
  observer.value = null
})
</script>

<template>
  <div class="a-infinity" ref="rootNode">
    <div class="a-infinity__loader-wrapper" v-if="state==='loading'">
      <ALoader />
    </div>
    
  </div>
</template>

<style scoped>
.a-infinity {
  /*background-color: #aff;*/
  /*height: 100px;*/
  .a-infinity__loader-wrapper {
    /*background-color: red;*/
    /*outline: 1px solid darkred;*/
    
    display: flex;
    justify-content: center;
    padding-top: var(--gap);
  }
}
</style>
