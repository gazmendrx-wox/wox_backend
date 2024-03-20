import useDynamicPost from "@/hooks/useDynamicPost";
import useFetchPost from "@/hooks/useDynamicPost";
import { useState } from "react";

export default function Home(){

    const [ reviewValue, setReviewValue] = useState('')
    const { data , handleSubmitForm } = useDynamicPost('http://localhost:3001/review/create')

    const handleInputChange = (e) => {
        const {value} = e.target;
        setReviewValue(value)
    }
    const handleAddReview = () => {
        const postData = {
            value : reviewValue
        }

        handleSubmitForm(postData , 'POST')
        console.log(data)
    }
    
    return<div>
         <h1>Reviews</h1>
       
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review"/>   
        <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>

    </div>
}