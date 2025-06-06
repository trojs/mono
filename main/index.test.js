import { test } from 'node:test'
import assert from 'node:assert'
import { run } from './index.js'
await test('Main', async (t) => {
  await t.test('Test Main', async () => {
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
    const result = run()
    assert.deepStrictEqual(result, expected)
  })
})
