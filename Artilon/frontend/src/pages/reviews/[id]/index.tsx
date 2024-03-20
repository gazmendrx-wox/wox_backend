"use client"
import DateComponent from "@/components/DateComponent";
import useDynamicPost from "@/hooks/useDynamicPost";
import useFetch from "@/hooks/useFetch"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home(){
    const router = useRouter();
    const { id } = router.query;

    const { loading, data } = useFetch(id ? `http://localhost:3001/review/${id}` : null);

    const [ newValue, setNewValue] = useState('')

    const { handleSubmitForm } = useDynamicPost('http://localhost:3001/review/update');
    

    if(!loading){
        console.log(data,1)
    }
    if(loading){
        return <p>loading...</p>
    }
    
    const handleInputChange = (e) => {
        const {value} = e.target;
        setNewValue(value)
    }
    const handleUpdateReview = () => {
        const postData = {
            id : id,
            value : newValue
        }

        handleSubmitForm(postData , 'POST')
        console.log(data)
    }
    return<>
        <h1>List of Reviews</h1>
       
        <h3> <Link href='/reviews'> {data.id} -{data.value} created <DateComponent dateString={data.created_at}/></Link></h3>
        <form>
            <input type="text" value={newValue} onChange={handleInputChange}/>   
            <button type="button" onClick={handleUpdateReview}>Update Review</button>
        </form>
        
    </>
}