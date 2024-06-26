import type { DirectiveBinding, ObjectDirective } from 'vue'
import {reactive} from 'vue'

import type {
  ValidationRule,
  RuleValue,
  Rule,
  FormFields,
  FormError
} from '@/a-library/vue-plugins/aValidator/types';

import validationRules from './validationRules';
import validationMessages from './validationMessages';


// Хранит примерно такое значение
// [{ 'field_name':'phone_no', 'rules':{required:true, max:5}}]
const formFields: FormFields = [];


const fieldErrors: Record<string, string> = reactive({});

function setFormFieldData(fieldName: string, rules: string) {


  const validationRules: Rule = {};

  rules.split("|").map((node) => {
    const ruleStringFull = node.split(":");
    const ruleStringName = ruleStringFull[0]
    let ruleStingValue: RuleValue = ruleStringFull[1]
    if (ruleStingValue === 'true') ruleStingValue = true
    validationRules[ruleStringName] = ruleStingValue ?? true;
  });

  // console.log(validationRules); console.log('^...validationRules:')

  const alreadyPresentField = formFields.find(field=>field.fieldName===fieldName);

  if(alreadyPresentField){
    // todo:: посмотреть как это будет работать с 2-мя разными формами.

    // Т.к. функция вызывается и при update, нжно чтобы в правилах не возникало дублей.
    // Поэтому перезаписываем.
    // К тому-же список правил может вдруг измениться. Поэтому точно перезаписываем.
    alreadyPresentField.rules = validationRules;
    return true;
  }

  formFields.push({
    fieldName: fieldName,
    rules: validationRules,
  });

  // console.log(formFields); console.log('^...formFields:')

}


const setFieldError = (formError: FormError, clear=false) => {
  const fieldName = formError.fieldName;
  if(clear){
    fieldErrors[fieldName] = '';
    return false;
  }
  // Replacing underscore and value preceding # from field name. Нахуя?
  // Видел в одной библиотеке такую замену. Не понял зачем она нужна, но пусть побудет здесь.
  // fieldName=fieldName.replace(/_/g, ' ').split('#')[0];

  const textMessageUnprepared = validationMessages[formError.ruleName]
  textMessageUnprepared
    .replace(':attribute', fieldName)
    .replace(':param', formError.ruleParam.toString());

  fieldErrors[fieldName] = textMessageUnprepared;
  return true;
}

const runValidation = (toBeValidatedFields: FormFields, form: HTMLFormElement)=>{
  return new Promise((resolve, reject)=>{
    const formErrors = []
    try {
      toBeValidatedFields.forEach((field)=>{
        for(const [ruleName, ruleParameter] of Object.entries(field.rules)) {
          // todo:: здесь похоже нужно выбирать не из документа, а из конкретной проверяемой формы
          const fieldElement = document.getElementsByName(field.fieldName)[0]
          // let fieldElement = form.elements[field.fieldName]
          // const fieldElement = form.elements['home']
          // const fieldElement = form.elements.namedItem(field.fieldName)

          // let fieldElement = form.elements[1]
          if (!fieldElement) continue

          const fieldValue = fieldElement.value


          const formError: FormError= {
            fieldName: field.fieldName,
            ruleName: ruleName,
            ruleParam: ruleParameter,
            formName: field.formName
          }
          if (validationRules[ruleName](fieldValue, ruleParameter)) {
            setFieldError(formError, true)
          } else {
            setFieldError(formError)
            formErrors.push(formError);
          }
        }

      })
    } catch (e) {
      reject(e)
    }
    if (formErrors.length){
      resolve(false)
    } else {
      resolve(true)
    }
  })
}

// const validateForm = (FormName='')=>{
const validateForm = (form: HTMLFormElement)=>{
  // todo:: здесь, похоже хорошо-бы валидировать не все поля, только те, которые принадлежат к конкретной форме.
  const toBeValidatedFields = formFields;
  return runValidation(toBeValidatedFields, form);
}


export default {
  validateDirective(el: HTMLElement, binding: DirectiveBinding) {
    const elementName = el.getAttribute("name")
    const rulesString = binding.value

    const areRulesPassed = Boolean(rulesString)

    if (areRulesPassed && !elementName) {
      // todo:: проверить запретит ли линтер console.log
      console.error(el)
      throw new Error(`у проверяемого элемента должен быть атрибут name с уникальным значением`)
    }

    if (!elementName) {
      // Если у элемента нет имени, то ничего не делаем. Его и проверять не нужно.

      // Таким образом оставим возможность добавлять директиву на элементах у которых не нужна проверка.
      // Такое может быть если:
      // 1. Есть самописный инпут. Он-обертка над другим инпутом.
      // 2. В самописном инпуте есть директива для проверки.
      // 3. Самописный инпут используется повсеместно, и для него то нужна валидация, то не нужна.
      return
    }
    setFormFieldData(
      elementName,
      binding.value
    );
  },
}

export {
  validateForm
}
