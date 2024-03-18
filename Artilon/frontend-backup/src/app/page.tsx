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

export default function Home(){
  return <>
    <p>List of Reviews</p>
    <p>value -has been created : [created_at] and is NOT modefied if modified_at is null</p>
  </>
}


