import { dynamicFetch } from "@/helpers/dynamicFetch";
import { useState } from "react";

export default function Home(){

    const [ reviewValue, setReviewValue] = useState('')

    const handleInputChange = (e) => {
        const {value} = e.target;
        setReviewValue(value)
    }
    const handleAddReview = async () => {
        const postData = {
            value : reviewValue
        }
        const response = await dynamicFetch('http://localhost:3001/review/create', 'POST', postData)
        console.log(response)

    }
    
    return<div>
         <h1>Reviews</h1>
       
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review"/>   
        <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>

    </div>
}

function useDynamicPost(arg0: string): { data: any; handleSubmitForm: any; } {
    throw new Error("Function not implemented.");
}
