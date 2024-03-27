import { useState } from "react";

export default function useDynamicFetch(url) {
  const [data, setData] = useState(null);


  const handleSubmitForm= async (postData, method) => {
    try {
      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.error("Error to load data");
      setData(null)
    }
  };

    return {data, handleSubmitForm}

}