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
    $height: calc(var(--gap) * 2);

    display: block;
    width: fit-content;

    border-radius: var(--borderRadius);
    outline: none !important;
    text-decoration: none;
    color: white;
    background-color: var(--clrFillBlueSmall);
    border: none;
    height: $height;
    line-height: $height;
    padding: 0 calc(var(--gap) * 2);
    cursor: pointer;
    transition: background-color var(--timeShort);
    &:hover {
      background-color: var(--clrFillBlueAccent);
    }
  }
  .btn--error {
    background-color: var(--clrFillRedSmall);
    //background-color: clrFill(small, error);
    &:hover {
      //background-color: clrFill(accent, error);
      background-color: var(--clrFillRedAccent);
    }
  }
  .btn--success {
    //background-color: clrFill(small, success);
    background-color: var(--clrFillGreenSmall);
    &:hover {
      //background-color: clrFill(accent, success);
      background-color: var(--clrFillGreenAccent);
    }
  }
  .btn--danger {
    //background-color: clrFill(small, danger);
    background-color: var(--clrFillOrangeSmall);
    &:hover {
      //background-color: clrFill(accent, danger);
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
