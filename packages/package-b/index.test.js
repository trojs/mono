import { test } from 'node:test'
import assert from 'node:assert'
import { add, hello } from './index.js'
await test('Package N', async (t) => {
  await t.test('Test Hello', async () => {
    const exptected = 'Hello, Pieter!'
    const result = hello('Pieter')
    assert.strictEqual(result, exptected)
  })

  await t.test('Test Add', async () => {
    const expected = 5
    const result = add(2, 3)
    assert.strictEqual(result, expected)
  })
})
