import useDynamicFetch from "@/hooks/useDynamicFetch";
import useFetchPost from "@/hooks/useDynamicFetch";
import { useState } from "react"

export default function CreateReview() {

    const [reviewValue, setReviewValue] = useState('')
    const { data, handleSubmitForm } = useDynamicFetch('http://localhost:3001/review/create')

    const handleInputChange = (e) => {

        // //classic way (old)
        // const reviewValue = e.target.value; //regular "js-way"
        // setReviewValue(reviewValue)

        //modern way
        const { value } = e.target; // destructing of object - eshte ekstrakti i nje attributi ose me shume nga nje objekt i caktum
        setReviewValue(value)
    }

    const handleAddReview = () => {
        //will handle creation of review
        const postData = {
            value: reviewValue
        }

        handleSubmitForm(postData, 'POST')
        //handleSubmitForm(postData, 'PUT') per update
    }

    return <>
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review" />
            <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>
    </>
}