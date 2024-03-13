import { useEffect, useState } from "react";
import useFetch from "../use-effect-data/useFetch";

export default function EffectHomework() {
    const { data, loading } = useFetch('https://dummyjson.com/products')

    if(loading) {
        console.log('loading...', loading)
    }

    if(!loading) {
        console.log('data', data)
    }


  return <div>
        <h1>Epic Homework for UseEFFECT</h1>
  </div>
}