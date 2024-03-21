import ListOfReviews from "../../components/ListOfReviews";
import useFetch from "../../hooks/useFetch";

export default function Review() {
  const { data: listOfReviewsData, loading } = useFetch(
    "http://localhost:3001/reviews"
  );

  if (!loading) {
    console.log(listOfReviewsData);
  }

  return (
    <>
      {loading ? (
        <p>Loading reviews data...</p>
      ) : (
        <ListOfReviews listOfReviews={listOfReviewsData} />
      )}
    </>
  );
}
