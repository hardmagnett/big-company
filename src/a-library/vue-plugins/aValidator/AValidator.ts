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

  console.log(formFields); console.log('^...formFields:')

}

// setFormFieldData('my-name', 'required:true|max:5|boolRule')

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
