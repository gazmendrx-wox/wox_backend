"use client";
import useDynamicFetch from "@/hooks/useDynamicFetch";
import { useState } from "react";

const CreateReview = () => {
  const [reviewValue, setReviewValue] = useState("");
  const { data, handleSubmitForm } = useDynamicFetch(
    "http://localhost:3001/review/create"
  );

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReviewValue(value);
  };

  const handleAddReview = () => {
    event?.preventDefault();
    console.log("Review:", reviewValue);
    const postData = {
      value: reviewValue,
    };

    handleSubmitForm(postData, "POST");
  };

  return (
    <form onSubmit={handleAddReview}>
      <div>
        <input
          type="text"
          value={reviewValue}
          onChange={handleInputChange}
          placeholder="Write your review..."
        />
      </div>
      <div>
        <button type="submit">Add Review</button>
      </div>
    </form>
  );
};

export default CreateReview;
