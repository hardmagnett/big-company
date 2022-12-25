<template>
  <component :is="rootComponent"
    class="btn"
    v-bind="$attrs"
  >
    <slot/>
  </component>
</template>

<script>

export default {

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
  .btn {
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
  }
  .btn--error {
    background-color: var(--clrFillRedSmall);
    &:hover {
      background-color: var(--clrFillRedAccent);
    }
  }
  .btn--success {
    background-color: var(--clrFillGreenSmall);
    &:hover {
      background-color: var(--clrFillGreenAccent);
    }
  }
  .btn--danger {
    background-color: var(--clrFillOrangeSmall);
    &:hover {
      background-color: var(--clrFillOrangeAccent);
    }
  }
  .btn--small {
    $height: calc(var(--gap) * 1.5);
    padding: 0 var(--gap);
    height: $height;
    line-height: $height;
    font-size: var(--fontSizeSmall);
  }
</style>
