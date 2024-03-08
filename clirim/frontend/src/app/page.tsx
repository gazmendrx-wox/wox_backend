"use client"

import Courses from "../components/Courses"
import Person from "../components/Person"

const persons = [
  {id:1, name: 'Gazmend', city: 'Prishtina'},
  {id:2, name: 'Aulona', city: 'Prishtina'},
  {id:3, name: 'Artilon', city: 'Prishtina'},
  {id:4, name: 'Edon', city: 'Bujanovc'},
  {id:5, name: 'Clirim', city: 'Terrnovc'}
]

const courses = [
  {id: 6, name: 'html', length_of_weaks: '1 weak' },
  {id: 7, name: 'css', length_of_weaks: '2 weak' },
  {id: 8, name: 'javascipt', length_of_weaks: '4 weak' },
  {id: 9, name: 'postgresql', length_of_weaks: '2 weak' },
  {id: 10, name: 'express', length_of_weaks: '2 weak' },
]

export default function Home() {
  return <>
  {persons.map(i => (
      <Person key={i.id} name={i.name} city={i.city} />
  ))}

  {courses.map(i => (
    <Courses key={i.id} name={i.name} length_of_weaks={i.length_of_weaks} />
  ))}
  </>
}
