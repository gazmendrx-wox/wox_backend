import { useState } from "react"
import useFetchPost from "../../../hooks/useFetchPost";

export default function createFrom() {

    const [reviewValue, setReviewValue] = useState ('')
    const { data,  handleSubmitForm } = useFetchPost('http://localhost:3001/review/create')
    const handleInputChange = (e) => {
        const { value } = e.target; 
        setReviewValue(value)
    } 
    const handleAddReview = () => {
        //will hanlde creation of review
        const postData = {
            value: 'vlera e inputit per review'
        }
        
        handleSubmitForm(postData)
        console.log(data)
    }
   return<>
        <form>
            <input type="text" name="value" value={reviewValue} onChange={handleInputChange} placeholder="enter a review" />
            <button type="button" onClick={handleAddReview}>Add Review</button>
        </form>
    </>
}