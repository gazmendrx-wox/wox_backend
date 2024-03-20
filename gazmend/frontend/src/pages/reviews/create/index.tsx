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
    
    const handleSubmitForm = () => {
        //will handle creation of review
    }

    return <>
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review" />
            <button type="button" onClick={handleSubmitForm}>Add Review</button>
        </form>
    </>
}