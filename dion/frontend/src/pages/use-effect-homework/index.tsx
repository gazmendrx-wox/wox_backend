import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Link from "next/link";
import Reviewdata from "@/components/Reviewdata";

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
        return <>
        <h1>Loading</h1>
        </>
    }

    return <div>
        <Reviewdata data={data}></Reviewdata>
       
    </div>
}