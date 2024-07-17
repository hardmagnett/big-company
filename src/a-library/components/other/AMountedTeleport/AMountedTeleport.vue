<script setup lang="ts">
/**
 * Этот компонент спасает от проблемы, когда место назначения ещё не отрендерилось,
 * а в него уже отправляется контент.
 * Проблема описана, например, здесь.
 * https://github.com/storybookjs/storybook/issues/17954
 * Несмотря на то, что Evan You рекомендует использовать teleport только за пределами <div id="app">,
 * в реальности иногда удобно отправлять что угодно куда угодно.
 */
import { onMounted, ref } from "vue";

export interface Props {
  to: string;
}
withDefaults(defineProps<Props>(), {});

let isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <Teleport :to="to" v-if="isMounted"><slot></slot></Teleport>
</template>

<style scoped>
.a-mounted-teleport {
}
</style>
