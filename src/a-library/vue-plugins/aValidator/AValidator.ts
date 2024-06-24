import type { DirectiveBinding, ObjectDirective } from 'vue'


// todo:: убрать any
type RuleValue = string | Boolean
type Rule = Record<string, RuleValue>

// Хранит примерно такое значение
// [{ 'field_name':'phone_no', 'rules':{required:true, max:5}}]
// const formFields: Record<string, any>[] = [];
const formFields: { fieldName: string, rules: Rule }[] = [];

function setFormFieldData(fieldName: string, rules: string) {


  const validationRules: Rule = {};

  rules.split("|").map((node) => {
    const ruleStringFull = node.split(":");
    const ruleStringName = ruleStringFull[0]
    let ruleStingValue: RuleValue = ruleStringFull[1]
    if (ruleStingValue === 'true') ruleStingValue = true
    validationRules[ruleStringName] = ruleStingValue ?? true;
  });

  console.log(validationRules); console.log('^...validationRules:')

  const alreadyPresentField = formFields.find(field=>field.fieldName===fieldName);

  if(alreadyPresentField){
    // todo:: посмотреть как это будет работать с 2-мя разными формами.
    // Возможно здесь вообще сделать new Error()
    console.warn('2 полей с одинаковыми name в форме быть не должно. Перезаписываю.')
    alreadyPresentField.rules = validationRules;
    return true;
  }

  formFields.push({
    fieldName: fieldName,
    rules: validationRules,
  });

  console.log(formFields); console.log('^...formFields:')

}

setFormFieldData('my-name', 'required:true|max:5|boolRule')

export default {
  validateDirective(el: HTMLElement, binding: DirectiveBinding) {
    const elementName = el.getAttribute("name")
    if (!elementName) {
      // todo:: выводить в консоль сам элемент, чтобы его было легко отдебажить.
      throw new Error('у проверяемого элемента должен быть атрибут name')
    }
    setFormFieldData(
      elementName,
      binding.value
    );
  },
}
