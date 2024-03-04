"use client"

import Person from "./components/Person"

const persons = [
  {id:1, name: 'Gazmend', city: 'Prishtina'},
  {id:2, name: 'Aulona', city: 'Prishtina'},
  {id:3, name: 'Artilon', city: 'Prishtina'},
  {id:4, name: 'Edon', city: 'Bujanovc'},
  {id:5, name: 'Clirim', city: 'Terrnovc'}
]

export default function Home() {
  return <>
  {persons.map(i => (
      <Person key={i.id} name={i.name} city={i.city} />
  ))}
  </>
}
