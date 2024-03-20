import ReviewDetails from "@/components/ReviewDetails";
import useDynamicFetch from "@/hooks/useDynamicFetch";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import { useState } from "react";

const ReviewDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [reviewUpdatedValue, setReviewUpdatedValue] = useState("");

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
    event?.preventDefault();
    console.log("Review:", reviewUpdatedValue);
    const postData = {
      id: id,
      value: reviewUpdatedValue,
    };

    handleSubmitForm(postData, "PUT");
  };

  // if (!loading) {
  //   console.log(reviewDetailsData);
  // }

  return (
    <>
      {loading ? (
        <p>Loading review data...</p>
      ) : (
        <>
          <ReviewDetails reviewDetails={reviewDetailsData} />

          <form onSubmit={handleUpdateReview}>
            <div>
              <input
                type="text"
                value={reviewUpdatedValue}
                onChange={handleInputChange}
                placeholder="Change your review..."
              />
            </div>
            <div>
              <button type="submit">Change Review</button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ReviewDetailsPage;
