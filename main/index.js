import { hi, multi, peopleByAge } from 'package-a'
import { add, hello } from 'package-b'

const run = () => {
  console.log(hi('Pieter')) // "Hi, Pieter!"
  console.log(multi(2, 3)) // 5

  console.log(hello('Pieter')) // "Hello, Pieter!"
  console.log(add(2, 3)) // 5

  const people = peopleByAge(62)
  console.log(people)
  return people
}
run()
export { run }
