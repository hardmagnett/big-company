<script setup lang="ts">
import { } from 'vue'
import AMountedTeleport from "@/a-library/components/other/AMountedTeleport/AMountedTeleport.vue";

export interface Props {
  text?: string,
}
withDefaults(defineProps<Props>(), {
  text: 'Текст не указан'
})

</script>

<template>
  <AMountedTeleport
      to="#page-header-place"
  >
    <APageHeader> {{text}} </APageHeader>
  </AMountedTeleport>
</template>

<style scoped>
.a-page-header-with-teleport {}
</style>
