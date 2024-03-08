"use client";
import Course from "@/components/Course";
import Person from "@/components/Person";

const persons = [
  { id: 1, name: "Gazmend", city: "Prishtina" },
  { id: 2, name: "Aulona", city: "Prishtina" },
  { id: 3, name: "Artilon", city: "Prishtina" },
  { id: 4, name: "Edon", city: "Bujanovc" },
  { id: 5, name: "Clirim", city: "Terrnovc" },
];

const courses = [
  { id: 1, name: "HTML & CSS", length_of_weeks: "3 weeks" },
  { id: 2, name: "JavaScript", length_of_weeks: "4 weeks" },
  {
    id: 3,
    name: "Docker & ExpressJS & PostgreSQL",
    length_of_weeks: "2 weeks",
  },
  { id: 4, name: "ReactJS + NextJS", length_of_weeks: "3 weeks" },
];

export default function Home() {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} name={person.name} city={person.city} />
      ))}

      {courses.map((course) => (
        <Course
          key={course.id}
          name={course.name}
          lengthOfWeeks={course.length_of_weeks}
        />
      ))}
    </>
  );
}
