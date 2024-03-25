import Link from "next/link";

const ListOfReviews = ({ listOfReviews }) => {
  return (
    <>
      <ul>
        {listOfReviews.map((data, index) => (
          <li key={data.id}>
            <Link href={`/reviews/${data.id}`}>
              {index + 1}. {data.value} - created at{" "}
              {new Date(data.created_at).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListOfReviews;
