import { useState, useEffect } from "react";

export default function useFetchPost(url) {
    const [data, setData] = useState(null);

    const handleSubmitForm = async (postData) => {
      try {
        fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        })
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          });
      } catch (error) {
        console.error("Error to load data");
        setData(null)
      }
    };

    return { data, handleSubmitForm}
}