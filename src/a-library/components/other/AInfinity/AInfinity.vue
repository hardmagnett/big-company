<script setup lang="ts">
/**
 * Вдохновлялся этой статьей и этой библиотекой
 * https://www.netguru.com/blog/infinite-scroll-with-vue.js-and-intersection-observer
 * https://vue3-infinite-loading.netlify.app/guide/quick-demo.html
 * Но переделал всё до неузнаваемости. Пусть ссылки останутся, на случай если нужно будет доработать.
 */
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import ALoader from "@/a-library/components/other/ALoader/ALoader.vue";
import {checkScrollBarPresenceHorizontal} from '@/a-library/helpers/DOM/scrollHelpers';



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

    let containerNode = getContainerNode()
    
    await nextTick(); // Чтобы вновь пришедшие данные успели отрендериться
     
    let hasScrollBar = checkScrollBarPresenceHorizontal(containerNode)
    if (!hasScrollBar) {
      // Если после добавления партии скролл-бар ещё не появился, то загружаю ещё одну партию.
      emitLoadMore()
    }
    
  },
  completed() {
    state.value = "completed";
    observer.value?.disconnect()
  },
};


const emitLoadMore = ()=>{
  stateHandler.loading();
  emit('needToLoadMore', stateHandler)
}

const handleIntersect = (triggerNode: IntersectionObserverEntry) => {
  if (triggerNode.isIntersecting && ['empty', "loaded"].includes(state.value)) {
    emitLoadMore()
  }
}

const getContainerNode = ()=>{
  // Можно ещё сделать опциональный prop с контейнером и использовать его, если этот prop передан.
  let localRootNode = rootNode.value as Element
  const ancestorNode = localRootNode.parentElement as HTMLElement;
  return ancestorNode
}

const prepareIntersectionObserver = ()=>{
  // Здесь rootNode уже точно Element.
  let localRootNode = rootNode.value as Element
  
  const ancestorNode = getContainerNode();
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
  display: flex;
  .a-infinity__loader-wrapper {
    flex: 1 1 auto;

    
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: var(--gap);
    .a-loader {}
  }
}
</style>
