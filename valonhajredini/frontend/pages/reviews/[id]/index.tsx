"use client"
import useFetch from "@/hooks/useFetch"
import { useRouter } from "next/router";
import Link from "next/link";
import useDynamicFetch from "@/hooks/useDynamicFetch";
import { useState } from "react";

export default function ReviewById(){
    const router = useRouter();
    const { id } = router.query;
    const { handleSubmitForm } = useDynamicFetch('http://localhost:3001/review/update')
    const [newValue, setNewValue] = useState('')
    const { loading, data } = useFetch( id ? `http://localhost:3001/review/${id}` : null);
    if(!loading){
        console.log(data)
    }
    if(loading){
        console.log(data)
        return <p>loading...</p>
    }

    //update review

    const handleInputChange = (e) => {
        setNewValue(e.target.value);
    };
    const handleUpdateValue = () => {
        const postData = {
            id : id,
            value: newValue
        }
        handleSubmitForm(postData, 'POST');

        setNewValue("")
    };

    //delete review

    return<>
        <h1>THE REVIEW</h1>
        <h3>ID: {data.id}, VALUE: '{data.value}',  is created at {data.created_at}</h3><Link href={'/'}><b> GO BACK </b></Link>
    <form>
    <input type="text" value={newValue} onChange={handleInputChange} placeholder="update this review"/>
            <button onClick={handleUpdateValue}><b>Update</b></button>
    </form>
    </>
}