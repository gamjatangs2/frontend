export function makePerson(name: string, age: number){
  return {name: name, age: age}
}

export function testMakePerson() {
  console.log (
    makePerson('Daeho', 40),
    makePerson('Share', 44)
  )
}