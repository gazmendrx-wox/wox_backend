"use client"

import Person from "../components/Person"
import Courses from "../components/courses"





const persons = [
  {id:1, name: 'Gazmend', city: 'Prishtina'},
  {id:2, name: 'Aulona', city: 'Prishtina'},
  {id:3, name: 'Artilon', city: 'Prishtina'},
  {id:4, name: 'Edon', city: 'Bujanovc'},
  {id:5, name: 'Clirim', city: 'Terrnovc'}
]

const courses = [
  {id: 1, name: 'html', length_of_weeks: '1 weak' },
  {id: 2, name: 'css', length_of_weeks: '2 weak' },
  {id: 3, name: 'javascipt', length_of_weeks: '4 weak' },
  {id: 4, name: 'postgresql', length_of_weeks: '2 weak' },
  {id: 5, name: 'express', length_of_weeks: '2 weak' },
]

export default function Home() {
  return <>
  {persons.map(i => (
      <Person key={i.id} name={i.name} city={i.city} />
  ))}

  {courses.map(i => (
    <Courses key={i.id} name={i.name} length_of_weeks={i.length_of_weeks} />
  ))}
  </>
}
