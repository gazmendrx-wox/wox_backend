import { useState } from "react"
import useDynamicFetch from "../../../hooks/useDynamicFetch";

export default function createFrom() {

    const [reviewValue, setReviewValue] = useState ('')
    const { data,  handleSubmitForm } = useDynamicFetch('http://localhost:3001/review/create')
    const handleInputChange = (e) => {
        const { value } = e.target; 
        setReviewValue(value)
    } 
    const handleAddReview = () => {
        //will hanlde creation of review
        const postData = {
            value: reviewValue
        }
        
        handleSubmitForm(postData, 'POST')
        console.log(data)
    }
   return<>
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="enter a review" />
            <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>
    </>
}