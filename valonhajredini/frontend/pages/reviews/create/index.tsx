import useDynamicFetch from "@/hooks/useDynamicFetch";
import { useState } from "react"

export default function CreateReview() {

    const [reviewValue, setReviewValue] = useState('')
    const { data, handleSubmitForm } = useDynamicFetch('http://localhost:3001/review/create')

    const handleInputChange = (e) => {
        const { value } = e.target;
        setReviewValue(value)
    }
    const handleAddReview = () => {
        const postData = {
            value: reviewValue
        }

        handleSubmitForm(postData, 'POST')
        console.log(data)
    }

    return <>
    <form>
        <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="Enter a review"/>
        <button type="button" name="submit" onClick={handleAddReview}>Create</button>
    </form>
    </>
}