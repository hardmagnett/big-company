/**
 * Взял отсюда:
 * https://www.geeksforgeeks.org/what-is-object-equality-in-javascript/
 *
 *
 * true
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 1, b: { c: 2 } };
 *
 * true
 * const obj1 = { a: 1, b: { c: [1,2,{foo: 'bar'}] } };
 * const obj2 = { a: 1, b: { c: [1,2,{foo: 'bar'}] } };
 *
 * false
 * const obj1 = { a: 1, b: { c: [1,2,{foo: 'bar'}] } };
 * const obj2 = { a: 1, b: { c: [1,2,{foo: 'baz'}] } };
 *
 * true
 * const obj1 = [1, 2,3];
 * const obj2 = [1, 2,3];
 *
 * false
 * const obj1 = [1, 2,4];
 * const obj2 = [1, 2,3];
 *
 * Напоминалки:
 * - массив и null тоже являются типом Object
 * - Функция рекурсивная, ей-же сравниваются поля объектов, которые могут быть каким угодно типом,
 *   поэтому принимаем any.
 * @param obj1
 * @param obj2
 */
export default function deepEqual(obj1: any, obj2: any) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || obj1 === null ||
    typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
