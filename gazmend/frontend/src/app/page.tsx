"use client"

import Person from "@/components/Person"
import Link from "next/link";

/**
 * Component = Function
 * JSX - javascript and html code;
 */

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

function myFunction(a, b) {
  return a+b //return value ktu bon return te vlerave; Vlerat munden me qen string, number, etj.
}

//return value ne React Components gjithmone ka me qen JSX, JSX = HTML + JavaScript
export default function Home() {
  // Fillimi i JavaScript
  const javascript = 'Javascript';
  const numbers = [1,2,3,4,5];
  //Mbarimi i JavaScript - rrespektivisht Fillimi i JSX;
  return <>
    <h1>Hello Valon;</h1>
    {
      /**
       * nderprerje ne syntax; prej HTML -> JS
       */
      // numbers.map((number) => <Number />)
    }
    <p>Hello i Am a Paragraph;</p>
    <h3>I am an epic mix of HTML AND {javascript}</h3>
    <Link href='/reviews'>Go to Reviews</Link>
  </>
}