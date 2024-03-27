"use client"
import { dynamicFetch } from "@/helpers/dynamicFetch";
import FormattedDate from "@/components/FormattedData";
import useFetch from "@/hooks/useFetch"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home(){
    const router = useRouter();
    const { id } = router.query;

    const { loading, data } = useFetch(id ? `http://localhost:3001/review/${id}` : null);

    const [ newValue, setNewValue] = useState('')
    

  
    if(loading){
        return <p>loading...</p>
    }
    
    const handleInputChange = (e) => {
        const {value} = e.target;
        setNewValue(value)
    }
    const handleUpdateReview = async () => {
        const postData = {
            id : id,
            value : newValue
        }
        const response = await dynamicFetch('http://localhost:3001/review/update', 'PUT', postData)
        console.log(response)

    }
    const handleDeleteReview = async () => {
        const postData = {
            id : id,
        }
        const response = await dynamicFetch('http://localhost:3001/review/delete', 'DELETE', postData)
        console.log(response)

    }
    return<>
       
        <h3> <Link href='/reviews'> {data.id} -{data.value} created <FormattedDate dateString={data.created_at}/></Link></h3>
       <Link href='/'> <button type="button" onClick={handleDeleteReview}>Delete Review</button><br></br><br></br></Link>
        <form>
            <input type="text" value={newValue} onChange={handleInputChange}/>   
            <button type="button" onClick={handleUpdateReview}>Update Review</button>   
           
        </form>
  
    </>
}

