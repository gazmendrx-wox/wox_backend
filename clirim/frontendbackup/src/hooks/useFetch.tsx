import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

useEffect(() => {
    const getData = async () => {
      try {
        fetch(url, {
          mode: 'no-cors',
          headers: {
            "Content-Type": "application/json"
          },
          cache: 'no-cache'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setData(data)
            setLoading(false)
          });
      } catch (error) {
        console.error("Error to load data");
        setLoading(false)
      }
    };

    getData();

    return () => {
        setData(null)
    }
  }, [url]);


  return {data , loading}
}