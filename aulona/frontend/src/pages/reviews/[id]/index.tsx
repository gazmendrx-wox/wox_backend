import ReviewDetails from "@/components/ReviewDetails";
import { dynamicFetch } from "@/helpers/dynamicFetch";
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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReviewUpdatedValue(value);
  };

  const handleUpdateReview = async () => {
    console.log("Review:", reviewUpdatedValue);
    const putData = {
      id: id,
      value: reviewUpdatedValue,
    };

    const response = await dynamicFetch(
      "http://localhost:3001/review/update",
      "PUT",
      putData
    );

    console.log(response);
  };

  const handleDeleteReview = async () => {
    const deleteData = {
      id: id,
    };

    const response = await dynamicFetch(
      "http://localhost:3001/review/delete",
      "DELETE",
      deleteData
    );

    if (response) {
      router.push("/reviews");
    }
  };

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
            <div>
              <button type="button" onClick={handleDeleteReview}>
                Delete Review
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ReviewDetailsPage;
