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
 * @param {string} name
 * @returns {string}
 */
export function hi (name) {
  return `Hi, ${name}!`
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multi (a, b) {
  return a * b
}

/**
 * @param {number} age
 * @returns {Array<{id: number, name: string, age: number, city: string}>}
 */
export function peopleByAge (age) {
  return exampleArray.multifilter('age', age)
}
