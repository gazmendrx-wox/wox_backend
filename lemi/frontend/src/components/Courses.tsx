"use client"

/**
 * 
 * Nje komponent, ka Props; a.k.a properties, properties jan argumentet/parametrat e funksioneve;
 * psh Person(props); props = {name: 'emri prej page.tsx'}
 * 
 * Perdorimi, destructured nga props: 
 * 
 * Person({name}) {}
 */
export default function Course({name, length_of_weeks }) {
    return <h1> {name} has lasted {length_of_weeks}</h1>
}