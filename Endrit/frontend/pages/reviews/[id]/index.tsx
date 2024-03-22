import ReviewDetails from "../../../components/ReviewDetails";
import useDynamicFetch from "../../../hooks/useDynamicFetch";
import useFetch from "../../../hooks/useFetch";
import { useRouter } from "next/router";
import { useState } from "react";

const ReviewDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [reviewUpdate, setReviewUpdatedValue] = useState("");

  const { data: reviewDetailsData, loading } = useFetch(
    `http://localhost:3001/review/${id}`
  );

  const { data, handleSubmitForm } = useDynamicFetch(
    "http://localhost:3001/review/update"
  );

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReviewUpdatedValue(value);
  };

  const handleUpdateReview = () => {
    console.log("Review:", reviewUpdate);
    const postData = {
      id: id,
      value: reviewUpdate,
    };

    handleSubmitForm(postData, "PUT");
  };

  // if (!loading) {
  //   console.log(reviewDetailsData);
  // }

  return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <ReviewDetails reviewDetails={reviewDetailsData} />

          <form onSubmit={handleUpdateReview}>
            <div>
              <input type="text" value={reviewUpdate} onChange={handleInputChange} placeholder="Change your review..."
              />
            </div>
            <div>
              <button type="submit">Update Review</button>
            </div>
            <div>
              
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ReviewDetailsPage;
