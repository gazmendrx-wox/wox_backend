"use client"

import Person from "@/components/Person"

const persons = [
  {id:1, name: 'Gazmend', city: 'Prishtina'},
  {id:2, name: 'Aulona', city: 'Prishtina'},
  {id:3, name: 'Artilon', city: 'Prishtina'},
  {id:4, name: 'Edon', city: 'Bujanovc'},
  {id:5, name: 'Clirim', city: 'Terrnovc'}
]

const courses = [
  {cours_id:1, cours_name: 'JavaScript', length_of_weeks:12},
  {cours_id:2, cours_name: 'Html', length_of_weeks:4},
  {cours_id:3, cours_name: 'PHP', length_of_weeks:16},
  {cours_id:4, cours_name: 'Python', length_of_weeks:5},
  {cours_id:5, cours_name: 'CSS', length_of_weeks:6}
]

export default function Home() {
  return <>
    {
      persons.map((person) => <Person key={person.id} name={person.name} city={person.city} />)
    }
  </>
}


//{
//  courses.map((cours) => <Person key={cours.cours_id} cours_name={cours.cours_name} length_of_weeks={cours.length_of_weeks} />)
//}