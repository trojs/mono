import { Arr } from '@trojs/arrays'

const exampleArray = new Arr([
  {
    id: 0,
    name: 'John',
    age: 93,
    city: 'Patmos'
  },
  {
    id: 1,
    name: 'Peter',
    age: 62,
    city: 'Rome'
  },
  {
    id: 2,
    name: 'Luke',
    age: 84,
    city: 'Boeotia'
  },
  {
    id: 2,
    name: 'Paul',
    age: 62,
    city: 'Rome'
  }
])

/**
 * Returns a greeting message addressed to the specified name.
 * @param {string} name - The name to include in the greeting.
 * @returns {string} A greeting string in the format "Hi, {name}!".
 */
export function hi (name) {
  return `Hi, ${name}!`
}

/**
 * Returns the product of two numbers.
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The result of multiplying {@link a} by {@link b}.
 */
export function multi (a, b) {
  return a * b
}

/**
 * Returns all people from the example array whose age matches the specified value.
 * @param {number} age - The age to filter by.
 * @returns {Array<{id: number, name: string, age: number, city: string}>} An array of people objects with the specified age.
 */
export function peopleByAge (age) {
  return exampleArray.multifilter('age', age)
}
