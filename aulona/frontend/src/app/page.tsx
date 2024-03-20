"use client";

import useFetch from "@/hooks/useFetch";
import Link from "next/link";

export default function Home() {
  // const { data, loading } = useFetch("http://localhost:3001/reviews");
  // if (!loading) {
  //   console.log(data);
  // }
  // return (
  //   <>
  //     {loading ? (
  //       <p>Loading reviews data...</p>
  //     ) : (
  //       <ul>
  //         {data.map((review, index) => (
  //           <li key={index}>
  //             <Link href={"/reviews"}>
  //               {index + 1}. {review.value} - created at{" "}
  //               {new Date(review.created_at).toLocaleDateString()}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </>
  // );
}
