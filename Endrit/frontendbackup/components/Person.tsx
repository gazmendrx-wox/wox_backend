/**
 * 
 * Nje komponent, ka Props; a.k.a properties, properties jan argumentet/parametrat e funksioneve;
 * psh Person(props); props = {name: 'emri prej page.tsx'}
 * 
 * Perdorimi, destructured nga props: 
 * 
 * Person({name}) {}
 */
export default function Person({ name, city }) {
    return (
      <h1>
        Hi, I am {name}, I live in {city}
      </h1>
    );
  }
  