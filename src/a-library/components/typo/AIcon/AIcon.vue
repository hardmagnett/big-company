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
    rotate180: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes(){
      return {
        'mdi': true,
        [this.icon]: true,
        'mdi-rotate-180': this.rotate180,
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
  // Если вдруг будут приколы с размерами - смотри как сделано в плеере электроснега.
  // Там я решил эту проблему.

  // В случае необходимости, можно переделать размеры при помощи mdi-класоов. Наприме mdi-18px.mdi-set .
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
