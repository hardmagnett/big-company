<template>
  <component :is="rootComponent"
    class="btn"
    :class="{
      'btn--icon': icon,
      'btn--with-text': !icon
    }"
    v-bind="$attrs"
  >
    <slot/>
  </component>
</template>

<script>

export default {
  props: {
    icon: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    rootComponent () {
      return this.isAnchor ? 'a'
        : this.isRouterLink ? 'router-link'
          : 'button'
    },
    isAnchor () {
      return this.$attrs.href
    },
    isRouterLink () {
      return this.$attrs.to
    }
  }
}
</script>

<style scoped lang="scss">
  .btn--with-text {
    --height: calc(var(--gap) * 1.6);
    @media (min-width: $bpMd) {
      --height: calc(var(--gap) * 1.8);
    }
    @media (min-width: $bpLg) {
      --height: calc(var(--gap) * 1.8);
    }

    height: var(--height);
    line-height: var(--height);
    //padding: 0 var(--height);
    padding: 0 var(--gap);

    display: block;
    width: fit-content;

    border-radius: var(--borderRadius);
    outline: none !important;
    text-decoration: none;
    color: white;
    background-color: var(--clrFillBlueSmall);
    border: none;


    cursor: pointer;
    transition: background-color var(--timeShort);
    &:hover {
      background-color: var(--clrFillBlueAccent);
    }
    &.btn--error {
      background-color: var(--clrFillRedSmall);
      &:hover {
        background-color: var(--clrFillRedAccent);
      }
    }
    &.btn--success {
      background-color: var(--clrFillGreenSmall);
      &:hover {
        background-color: var(--clrFillGreenAccent);
      }
    }
    &.btn--danger {
      background-color: var(--clrFillOrangeSmall);
      &:hover {
        background-color: var(--clrFillOrangeAccent);
      }
    }
    &.btn--small {
      $height: calc(var(--gap) * 1.5);
      padding: 0 var(--gap);
      height: $height;
      line-height: $height;
      font-size: var(--fontSizeSmall);
    }
  }


  .btn--icon {
    cursor: pointer;
    border-radius: 50%;
    border: none;
    padding: 0;

    background-color: transparent;
    transition: background-color var(--timeShort);

    --size: calc(var(--gap) * 1.6);
    @media (min-width: $bpMd) {
      --size: calc(var(--gap) * 1.8);
    }
    @media (min-width: $bpLg) {
      --size: calc(var(--gap) * 1.8);
    }
    height: var(--size);
    width: var(--size);

    color: var(--clrFillBlueSmall);
    &:hover {
      background-color: var(--clrBgBlueSmall);
    }

    &.btn--success {
      color: var(--clrFillGreenSmall);
      &:hover {
        background-color: var(--clrBgGreenSmall);
      }
    }
    &.btn--danger {
      color: var(--clrFillOrangeSmall);
      &:hover {
        background-color: var(--clrBgOrangeSmall);
      }
    }
    &.btn--error {
      color: var(--clrFillRedSmall);
      &:hover {
        background-color: var(--clrBgRedSmall);
      }
    }

  }
</style>
