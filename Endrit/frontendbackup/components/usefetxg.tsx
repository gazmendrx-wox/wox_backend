import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                fetch(url)
                .then((res) => res.json())
                ,then((data) => {
                    setData(data)
                    setLoading
                })
            }
        }
    })
}