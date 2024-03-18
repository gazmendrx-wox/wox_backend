"use client"
import useFetch from "@/hooks/useFetch"


export default function Home(){
    const { loading, data } = useFetch('http://localhost:3001/reviews')
    if(!loading){
        console.log(data)
    }
    return<>
    <h1>Hello world</h1>
    </>
}