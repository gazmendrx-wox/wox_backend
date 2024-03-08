"use client"

import Person from "@/components/Person"
import Course from "@/components/Course"





const persons = [
  {id:1, name: 'Gazmend', city: 'Prishtina'},
  {id:2, name: 'Aulona', city: 'Prishtina'},
  {id:3, name: 'Artilon', city: 'Prishtina'},
  {id:4, name: 'Edon', city: 'Bujanovc'},
  {id:5, name: 'Clirim', city: 'Terrnovc'}
]

const courses = [
  {id:6, name: ' Full Stack Development', length_of_weeks: '12 weeks' } ,
  {id:7 , name: ' Database', length_of_weeks: '6 weeks' } ,
  {id:8 , name: ' Software tester', length_of_weeks: '4 weeks' } ,
  {id:9 , name: ' .NET c#', length_of_weeks: '18 weeks' }
]


export default function Home(){
  return <>
  {
    persons.map((person) => <Person key={person.id} name={person.name} city={person.city} />)
  }
  {
    courses.map((course) => <Course key={course.id} name={course.name} length_of_weeks={course.length_of_weeks} />)
  }
  </>
}
