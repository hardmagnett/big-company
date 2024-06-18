<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// Props for our component,
// these are the same as Notitfication interface.
const props = defineProps({
  id: { type: String, required: true },
  type: {
    type: String,
    default: "info",
    required: false,
  },
  title: { type: String, default: null, required: false },
});

</script>

<template>
  <div class="a-toast">
  </div>
</template>

<style scoped lang="scss">
.a-toast {}
</style>
