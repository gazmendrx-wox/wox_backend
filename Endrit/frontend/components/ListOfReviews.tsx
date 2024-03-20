import Link from "next/link";

const ListOfReviews = ({ listOfReviews }) => {
  return (
    <>
      <ul>
        {listOfReviews.map((review) => (
          <li key={review.id}>
            <Link href={`/reviews/${review.id}`}>
              {+ 1}. {review.value} - created at{" "}
              {new Date(review.created_at).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListOfReviews;
