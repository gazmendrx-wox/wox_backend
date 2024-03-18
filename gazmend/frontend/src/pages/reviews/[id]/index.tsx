'use client'
 
import { useSearchParams } from 'next/navigation'

export default function ReviewById({params}){

    return <h1>Hello I am ID: {params.id}</h1>
}