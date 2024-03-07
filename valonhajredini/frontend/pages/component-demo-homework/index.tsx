"use client"
/**
 * DETYRA:
 *
 * Me i shfaqe te gjitha te dhanat prej objektit data ne nje page ne next/react;
 */

import HandleData from "@/components/handleData"
import React from "react"

export default function Home(){
    return <>
    <HandleData fieldName={"football"}/>
    <HandleData fieldName={"baskeball"}/>
    <HandleData fieldName={"pool"}/>
    <HandleData fieldName={"baseball"}/>
    <HandleData fieldName={"hockey"}/>
    </>
    
}