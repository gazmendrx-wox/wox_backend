'use client'
import link from "next/link";
import useFetch from "../hooks/useFetch";
import Link from 'next/link'
import React from 'react';

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
      

    return <>
    <h1> review </h1>
    {data.map(reviews => (
        <h3> <Link href='//reviews' key={reviews.id}> {reviews.id} -{reviews.value} created {reviews.created_at}</Link> </h3>
    ))}
    
    </>
    


}