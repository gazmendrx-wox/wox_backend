const ReviewDetails = ({ reviewDetails }) => {
  return (
    <p>
      This <strong>{reviewDetails?.value}</strong> is created at{" "}
      {new Date(reviewDetails?.created_at).toLocaleDateString()}
    </p>
  );
};

export default ReviewDetails;
