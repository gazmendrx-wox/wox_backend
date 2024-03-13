import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            try{
                fetch(url)
                .then((res) => res.json())
                .then((data) => { setProducts(data) });
            } catch (error) {
                console.error('Error getting data');
                setLoading(false)
            }
        };

        getProducts();

        return () => {
            setProducts(null)
        }
    }, [url]);

    return { products, loading }
}