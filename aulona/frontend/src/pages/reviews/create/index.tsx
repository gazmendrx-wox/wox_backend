"use client";
import { dynamicFetch } from "@/helpers/dynamicFetch";
import router from "next/router";
import { useState } from "react";

const CreateReview = () => {
  const [reviewValue, setReviewValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReviewValue(value);
  };

  const handleAddReview = async () => {
    event?.preventDefault();
    console.log("Review:", reviewValue);
    const postData = {
      value: reviewValue,
    };

    const response = await dynamicFetch(
      "http://localhost:3001/review/create",
      "POST",
      postData
    );

    if (response) {
      router.push("/reviews");
    }

    console.log(response);
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
