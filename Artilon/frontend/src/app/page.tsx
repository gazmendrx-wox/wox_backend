"use clinet"

import Person from "@/components/Person"
import Course from "@/components/Course"


const persons = [
  {id:1, name: 'Gazmend', city: 'Prishtina'},
  {id:2, name: 'Aulona', city: 'Prishtina'},
  {id:3, name: 'Artilon', city: 'Prishtina'},
  {id:4, name: 'Edon', city: 'Bujanovc'},
  {id:5, name: 'Clirim', city: 'Terrnovc'}
]
/**
 * Detyra:
 *
 * Krijo nje komponent te ri, per Courses, i cili liston nga nje array const courses = [],
 * nje object course, ka atributet id, name, length_of_weeks
 *
 * Me shfaq Course: [name] - has lasted [length_of_weeks]
 */
const courses = [
  {id:6, name: 'HTML', length_of_weeks: '1 week'},
  {id:7, name: 'CSS', length_of_weeks: '2 weeks'},
  {id:8, name: 'JS', length_of_weeks: '3 weeks'},
  {id:9, name: 'Trello', length_of_weeks: '4 weeks'},
  {id:10, name: 'GIT', length_of_weeks: '5 weeks'}
]
export default function Home(){
  return <>
  {
    persons.map((person) => <Person key={person.id} name={person.name}  />)
  }
  {
    courses.map((course) => <Course key={course.id} name={course.name} length_of_weeks={course.length_of_weeks} />)
  }
  
  </>
}


