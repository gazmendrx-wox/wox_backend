
"use client"
import useFetch from "@/hooks/useFetch";
import ReviewData from "@/components/RiviewData";
import CreateReview from "@/pages/reviews/create";

export default function MyApp() {
  const { loading, data } = useFetch('http://localhost:3001/reviews');

  if (loading) {
    return <h1>Loading</h1>;
  }


  return <>

    <ReviewData data={data}></ReviewData>
    <CreateReview ></CreateReview>
   

  </>
}





