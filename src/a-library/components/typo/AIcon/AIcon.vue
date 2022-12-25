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
    size: {
      type: String,
      default: 'medium',    //tiny small medium large giant
    },
  },
  computed: {
    classes(){
      return {
        'mdi': true,
        [this.icon]: true,
        'a-icon--medium': this.size === 'medium',
        'a-icon--large': this.size === 'large',
        'a-icon--giant': this.size === 'giant',

      }
      // return [
      //   'mdi',
      //   this.icon,
      //
      // ]
    }
  }

}
</script>

<style scoped lang="scss">
.a-icon {
  &.a-icon--medium {
    font-size: var(--fontSizeBase)
  }
  &.a-icon--large {
    font-size: var(--fontSizeLarge)
  }
  &.a-icon--giant {
    font-size: var(--fontSizeGiant)
  }
}
</style>
