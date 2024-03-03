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
export default function Person({name}) {
    return <h1>Hello I am {name}</h1>
}