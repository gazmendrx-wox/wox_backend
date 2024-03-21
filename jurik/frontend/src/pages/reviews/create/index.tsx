
import { useRouter } from 'next/router';
import useFetch from "@/hooks/useFetch";
import { useState } from 'react';
import useFetchPost from '@/hooks/useDynamicFetch';


export default function Review() {

    const [ reviewValue, setReviewValue] = useState();
    const {data, handleSubmitForm} = useFetchPost("http://localhost:3001/review/create")

    const handleInputChange = (e) => {
        const {value} = e.target;
        setReviewValue(value)
    }

    const handleAddreview = () => {
        const postData = {
            value: reviewValue
        }


        handleSubmitForm(postData, "POST")
        console.log(data)
    }
 
    
    return <>
<form>
    <input type='text' name='value' value={reviewValue} onChange={handleInputChange} placeholder='Enter a riview'></input>
    <button type='button' onClick={handleAddreview}>Add riview</button>
</form>
    </>

    

}


