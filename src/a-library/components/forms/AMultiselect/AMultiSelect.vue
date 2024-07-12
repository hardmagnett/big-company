<script setup lang="ts">
import { computed, ref } from "vue";
import { iAInputablePropDefaults } from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

import { useMultiSelectLogic } from "./useMultiSelectLogic";
import { useMultiSelectMouse } from "./useMultiSelectMouse";

export interface Props extends IAInputableProps {
  options: Option[];
  optionObjectFieldTitle?: string;
  optionObjectFieldValue?: string;
  returnObject?: boolean;
  hideSearch?: boolean;
  multiple?: boolean;
  modelValue: Options;
}
const props = withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults,
  options: () => [],
  optionObjectFieldTitle: "title",
  optionObjectFieldValue: "id",
  returnObject: false,
  hideSearch: false,
  multiple: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: Options];
}>();

const realInput = ref<HTMLInputElement | null>(null);
const popover = ref<HTMLInputElement | null>(null);

let modelValueInner = computed({
  get() {
    return props.modelValue;
  },
  //fixme:: При следующей реализации данного компонента лучше сделать так:
  // Если options принимается массив объектов, а возвращается примитив,
  // То внутренним значением хранить объект.
  // Так получится более гибко.
  // А так как сейчас реализовано - приходится костыли ставить.
  set(newVal) {
    emit("update:modelValue", newVal);
  },
});

export type PropsWithDefaults = typeof props;
const {
  areOptionsArray,
  isOptionSelected,
  toggleOption,
  createTemplateKeyForOption,
  createTemplateValueForOption,
  createTemplateValueForSelectedValue,
} = useMultiSelectLogic(props, modelValueInner);

const { isFocused, selectedValuesClickHandler, closePopover } =
  useMultiSelectMouse(realInput, popover);

const optionClickHandler = (e: MouseEvent, option: Option) => {
  if (!props.multiple) {
    closePopover();
  }
  toggleOption(option);
};

export type OptionObject = Record<string | number, string | number>;
export type Option = null | string | number | OptionObject;
export type Options = Option | Option[];
</script>

<template>
  <AInputControl
    :label="label"
    :hideLabel="hideLabel"
    :hideHint="hideHint"
    class="a-multi-select"
    :class="{
      'a-input--with-error': errorMessages?.length,
      'a-multi-select--focused': isFocused,
    }"
    :errorMessages="errorMessages"
  >
    <input
      class="a-multi-select__input a-inputable__hidden-original-input"
      type="select"
      ref="realInput"
      @focus="selectedValuesClickHandler"
    />
    <div
      class="a-multi-select__selected-values-and-other a-multi-select__anchor-for-popover"
      :style="// @ts-ignore: TS не знает о position-anchor в 2024-07.
      { 'anchor-name': `--anchor-for-popover-${$.uid}` }"
      @click="selectedValuesClickHandler"
    >
      <div class="a-multi-select__selected-values">
        <span
          v-if="!areOptionsArray(modelValueInner) && modelValueInner"
          class="a-multi-select__selected-value"
        >
          {{ createTemplateValueForSelectedValue(modelValueInner) }}
        </span>
        <template v-if="areOptionsArray(modelValueInner)">
          <template
            v-for="(selectedOption, index) in modelValueInner"
            :key="index"
          >
            <span class="a-multi-select__selected-value">
              {{ createTemplateValueForSelectedValue(selectedOption)
              }}<span v-if="index != modelValueInner.length - 1">,&nbsp;</span>
            </span>
          </template>
        </template>
      </div>
      <div
        class="a-multi-select__selected-qty"
        v-if="areOptionsArray(modelValueInner) && modelValueInner.length > 1"
      >
        (Всего:

        <span class="a-multi-select__selected-qty-number">{{
          modelValueInner.length
        }}</span>

        )
      </div>
    </div>

    <div
      :style="{
        // @ts-ignore: TS не знает о position-anchor в 2024-07.
        width: `anchor-size(--anchor-for-popover-${$.uid} width)`,
        // @ts-ignore: TS не знает о position-anchor в 2024-07.
        'position-anchor': `--anchor-for-popover-${$.uid}`,
      }"
      popover
      ref="popover"
      class="a-multi-select__popover"
    >
      <div class="a-multi-select__options">
        <div
          class="a-multi-select__option"
          :class="{
            'a-multi-select__option--selected': isOptionSelected(option),
          }"
          v-for="(option, index) in options"
          :key="createTemplateKeyForOption(option, index)"
          @click="optionClickHandler($event, option)"
        >
          <span class="mod--ellipsis-one-line">
            {{ createTemplateValueForOption(option) }}
          </span>
        </div>
      </div>
    </div>
  </AInputControl>
</template>

<style scoped>
@import "@/a-library/components/forms/mixins/AInputable/AInputable.css";

@position-try --a-multiselect-popover-top {
  /*calc - костыль, потому-что нельзя дать разные стили в зависимости от перескока*/
  bottom: calc(anchor(top) - 1px);
  /*bottom: anchor(top);*/
  top: auto;
  /*Здесь не работают всякие border, color и т.п. 2024-07*/
}

.a-multi-select {
  --accentedColorLess: var(--clr-bg-blue-accent);
  --accentedColor: var(--clr-fill-blue-small);

  /*Постоянное*/
  position: relative;

  .a-multi-select__anchor-for-popover {
    position: relative;
  }

  .a-multi-select__popover {
    position: absolute;
    /*Не удалять. Пусть будет для понимания*/
    /*position-anchor: --anchor-for-popover;*/

    position-visibility: anchors-visible;

    margin: 0;
    padding: 0;
    /*border: 0;*/

    /*Опасный момент. */
    /*Бордюры у popover могут вызывать непредсказуемое поведение*/
    border: 1px solid var(--clr-border-blue-darker);

    /*calc - костыль, потому-что нельзя дать разные стили в зависимости от перескока*/
    top: calc(anchor(bottom) - 1px);
    bottom: auto;
    /*top: anchor(bottom);*/
    right: anchor(right);
    left: anchor(left);

    max-height: 200px;

    position-try-options: --a-multiselect-popover-top;

    /*Анимации открытия-закрытия start*/
    --transition-duration-opacity: var(--time-short);
    opacity: 0;
    transition:
      opacity var(--transition-duration-opacity),
      display var(--transition-duration-opacity) allow-discrete,
      overlay var(--transition-duration-opacity) allow-discrete;

    &[popover]:popover-open {
      opacity: 1;
    }
    @starting-style {
      &[popover]:popover-open {
        opacity: 0;
      }
    }
    /*Анимации открытия-закрытия end*/
  }

  .a-multi-select__selected-values-and-other {
    --height: calc(var(--gap) * 2);
    height: var(--height);
    padding-left: var(--gap);
    padding-right: var(--gap);
    border: 1px solid var(--clr-border-blue-lighter);
    border-radius: var(--border-radius);
    transition: all var(--time-short);
    width: 100%;
    background-color: white;
    cursor: pointer;

    display: flex;
    flex-flow: row nowrap;

    .a-multi-select__selected-qty {
      flex: 0 0 auto;
      line-height: var(--height);
      font-size: var(--font-size-tiny);
      .a-multi-select__selected-qty-number {
        width: 15px;
        display: inline-block;
        text-align: right;
      }
    }
    .a-multi-select__selected-values {
      height: var(--height);
      line-height: var(--height);

      flex: 1 1 auto;

      display: flex;
      flex-flow: row wrap;
      overflow: hidden;

      .a-multi-select__selected-value {
        height: var(--height);
        max-width: 100%;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .a-multi-select__options {
  }
  .a-multi-select__option {
    cursor: pointer;
    height: calc(var(--gap) * 2);
    font-size: var(--font-size-tiny);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    padding-left: var(--gap);
    padding-right: var(--gap);

    &:hover {
      background-color: var(--accentedColorLess);
    }
    &.a-multi-select__option--selected {
      background-color: var(--accentedColor);
      color: var(--clr-font-blue-light) !important;
    }
  }

  .a-multi-select__input:focus {
    /*Полезно будет для отладки*/
    /*background-color: red;*/
    /*opacity: 0.05;*/
  }
  &.a-multi-select--focused {
    .a-multi-select__selected-values-and-other {
      border: 1px solid var(--clr-border-blue-darker);
      border-radius: 0;
    }
  }
}
</style>
