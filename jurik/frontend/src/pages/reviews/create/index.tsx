import { dynamicFetch } from "@/helpers/dynamicFetch";
import { useState } from "react"

export default function CreateReview() {

    const [reviewValue, setReviewValue] = useState('')
    
    const handleInputChange = (e) => {

     

        const { value } = e.target; 
        setReviewValue(value)
    }

    const handleAddReview = async () => {
        const postData = {
            value: reviewValue
        }

        const response = await dynamicFetch('http://localhost:3001/review/create', 'POST', postData)
        console.log(response)
    }
    return <>
        <form>
            <br></br>
            <h2> Krijo nje review</h2>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review" />
            <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>
    </>

}