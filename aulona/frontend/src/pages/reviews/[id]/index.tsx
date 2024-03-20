import ReviewDetails from "@/components/ReviewDetails";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";

const ReviewDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: reviewDetailsData, loading } = useFetch(
    `http://localhost:3001/review/${id}`
  );

  if (!loading) {
    console.log(reviewDetailsData);
  }

  return (
    <>
      {loading ? (
        <p>Loading review data...</p>
      ) : (
        <ReviewDetails reviewDetails={reviewDetailsData} />
      )}
    </>
  );
};

export default ReviewDetailsPage;
