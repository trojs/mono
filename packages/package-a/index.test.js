import { test } from 'node:test'
import assert from 'node:assert'
import { hi, multi, peopleByAge } from './index.js'
await test('Package A', async (t) => {
  await t.test('Test Hi', async () => {
    const exptected = 'Hi, Pieter!'
    const result = hi('Pieter')
    assert.strictEqual(result, exptected)
  })

  await t.test('Test Multi', async () => {
    const expected = 6
    const result = multi(2, 3)
    assert.strictEqual(result, expected)
  })

  await t.test('Test Example Array', async () => {
    const expected = [
      {
        id: 1,
        name: 'Peter',
        age: 62,
        city: 'Rome'
      },
      {
        id: 2,
        name: 'Paul',
        age: 62,
        city: 'Rome'
      }
    ]
    const result = peopleByAge(62)
    assert.deepStrictEqual(result, expected)
  }
  )
})
