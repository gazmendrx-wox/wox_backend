import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

/**
 * DETYRA:
 * 
 * Nje page e cila shfrytezon useEffect per fetching of data nga https://dummyjson.com/docs
 * 
 * Carts, Recipes edhe Users;
 * 
 * Kerkesa kryesore e detyres eshte demonstrimi i useEffect, edhe Atomic
 * design principles per ndarjen e komponentave.
 * 
 */
export default function EffectHomework() {
    const { data, loading } = useFetch("http://localhost:3001/reviews")

    if(loading) {
        console.log('loading...')
    }

    if(!loading){
        console.log('data...', data)
    }
      

    return <div>
        <h1>Epic Homework for UseEffect</h1>
    </div>
}