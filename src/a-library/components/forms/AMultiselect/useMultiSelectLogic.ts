import type {Option, Options, OptionObject, PropsWithDefaults} from '@/a-library/components/forms/AMultiselect/AMultiSelect.vue';

export function useMultiSelectLogic(props: PropsWithDefaults, modelValueInner: Options) {
  
  const areOptionsArray = (options: Options): options is Array<Option> => {
    return Array.isArray(options)
  }
  
  const isOptionOptionObject = (option: Option): option is OptionObject =>{
    const result =  typeof option === 'object' && !Array.isArray(option) && option !== null
    return result
    
  }

  const createTemplateKeyForOption = (option: Option, index: number)=>{
    
    const result = isOptionOptionObject(option)
      ? option[props.optionObjectFieldValue]
      : index
    return result
  }
  const createTemplateValueForOption = (option: Option)=>{
    const result = isOptionOptionObject(option)
      ? option[props.optionObjectFieldTitle]
      : option
      
    return result
  }

  // todo:: возможно вынести в logic composable
  const pushOption = (option:Option) => {
    if (areOptionsArray(modelValueInner.value)){
      modelValueInner.value = [
        ...modelValueInner.value,
        option
      ]
    }
  }
// todo:: возможно вынести в logic composable
  const isOptionSelected = (option: Option) => {
    console.log(option); console.log('^...option:')
    let result = false
    if (props.multiple) {
      // Если в опциях - примитивы
      if (!isOptionOptionObject(option)) {
        if (areOptionsArray(modelValueInner.value)){
          result = modelValueInner.value.includes(option)
        }
      }
      // Если в опциях - объекты
      else {
        // Если возвращать объект
        if (props.returnObject) {
          if (areOptionsArray(modelValueInner.value)){
            let ids = modelValueInner.value.map((o: Option)=> {
              if (isOptionOptionObject(o)) {
                return o[props.optionObjectFieldValue]
              }
            })
            result = ids.includes(option[props.optionObjectFieldValue])
            // console.log(ids); console.log('^...ids:') 
          }

          // Если возвращать примитив
        } else {
          if (areOptionsArray(modelValueInner.value)){
            result = modelValueInner.value.includes(option[props.optionObjectFieldValue])
          }
        }
      }
    }
    // Single
    if (!props.multiple) {
      if (!isOptionOptionObject(option)) {
        result = modelValueInner.value === option
      } else {
        if (props.returnObject) {
          if (
            !areOptionsArray(modelValueInner.value)
            && isOptionOptionObject(modelValueInner.value)
          ) {
            result = modelValueInner.value?.[props.optionObjectFieldValue] === option[props.optionObjectFieldValue]
          }
        } else {
          result = modelValueInner.value === option[props.optionObjectFieldValue]
        }
      }
    }
    console.log(result); console.log('^...result:')
    // return false
    return result
  }
// todo:: возможно вынести в logic composable
  const unselectOption = (option: Option) => {
    if (props.multiple) {
      if (areOptionsArray(modelValueInner.value)) {
        let newSelectedOptions = modelValueInner.value.filter(
          (selectedOption: Option)=>{
            let result = true
            // Если возвращать массив примитивов
            if (!isOptionOptionObject(selectedOption)) {
              if (!isOptionOptionObject(option)) {
                result = selectedOption !== option
              } else {
                result = selectedOption !== option[props.optionObjectFieldValue]
              }

              // if (areOptionsArray(modelValueInner.value)){
              //   result = modelValueInner.value.includes(option)
              // }
            }
            // Если возвращать массив объектов
            else {
              if (isOptionOptionObject(option)) {
                result = selectedOption[props.optionObjectFieldValue] !== option[props.optionObjectFieldValue]
              }
            }
            return result
          }
        )
        modelValueInner.value = newSelectedOptions
      }

    }
    if (!props.multiple) {
      modelValueInner.value = null
    }
  }



// todo:: возможно вынести в logic composable
  const selectOption = (option: Option) => {
    if (props.multiple) {
      if (areOptionsArray(modelValueInner.value)){
        if (!isOptionOptionObject(option)) {
          pushOption(option)
        } else {
          if (props.returnObject) {
            pushOption(option)
          } else {
            pushOption(option[props.optionObjectFieldValue])
          }
        }
      }
    }
    // single
    if (!props.multiple) {
      if (!isOptionOptionObject(option)) {
        modelValueInner.value = option
      } else {
        if (props.returnObject) {
          modelValueInner.value = option
        } else {
          modelValueInner.value = option[props.optionObjectFieldValue]
        }
      }
    }
  }

// todo:: возможно вынести в logic composable
  const toggleOption = (option: Option) => {
    if (isOptionSelected(option)) {
      unselectOption(option)
    } else {
      selectOption(option)
    }
  }
  
  
  return {
    areOptionsArray,
    isOptionOptionObject,
    isOptionSelected,
    toggleOption,
    createTemplateKeyForOption,
    createTemplateValueForOption
  }
}
