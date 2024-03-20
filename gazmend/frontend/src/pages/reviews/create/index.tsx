import { dynamicFetch } from "@/helpers/dynamicFetch";
import { useState } from "react"

export default function CreateReview() {

    const [reviewValue, setReviewValue] = useState('')
    
    const handleInputChange = (e) => {

        // //classic way (old)
        // const reviewValue = e.target.value; //regular "js-way"
        // setReviewValue(reviewValue)

        //modern way
        const { value } = e.target; // destructing of object - eshte ekstrakti i nje attributi ose me shume nga nje objekt i caktum
        setReviewValue(value)
    }

    const handleAddReview = async () => {
        //will handle creation of review
        const postData = {
            value: reviewValue
        }

        const response = await dynamicFetch('http://localhost:3001/review/create', 'POST', postData)
        console.log(response)
    }

    return <>
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review" />
            <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>
    </>
}