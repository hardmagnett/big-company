<script>

export default {
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<template>
  <label :for="`check-box-${$.uid}`" class="check-box">
    <input
      class="check-box__input"
      type="checkbox"
      checked
      :id="`check-box-${$.uid}`"
    />
    <span
      class="check-box__label"
      :class="{'check-box__label--with-text': label}"
    >
      {{ label }}
    </span>
  </label>
</template>

<style scoped>
  .check-box {
    display: block;
    cursor: pointer;
    position: relative;
    width: fit-content;
    height: calc(var(--gap) + 2px);
    line-height: 1.2;

    .check-box__input {
      display: none;
      width: var(--gap);
      height: var(--gap);
    }

    .check-box__label {
      user-select: none;

      &:before,
      &:after {
        display: block;
        width: var(--gap);
        height: var(--gap);
        position: absolute;
        top: 0;
        left: 0;
      }

      /*Рамка для checkmark*/
      &:before {
        content: '';
        background-color: white;
        border: 1px solid var(--clr-border-blue-lighter);
      }
      /*Непосредственно checkmark*/
      &:after {
        color: var(--clr-fill-blue-accent);
        content: '✔';
        opacity: 0;
        transition: opacity var(--time-short);
        transform: translateX(3px) translateY(0px);
        font-weight: bold;
      }
    }

    .check-box__label--with-text {
      padding-left: calc(var(--gap) * 1.5);
    }

    /*чекнутый checkmark*/
    .check-box__input:checked + .check-box__label::after {
      opacity: 1;
    }
  }
</style>
