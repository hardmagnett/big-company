<template>
  <span
      class="a-icon"
      :class="classes"
  ></span>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      default: 'mdi-google-downasaur',
    },
  },
  computed: {
    classes(){
      return ['mdi', this.icon]
    }
  }

}
</script>

<style scoped lang="scss">
.a-icon {}
</style>
