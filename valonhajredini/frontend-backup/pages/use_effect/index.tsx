import { useEffect, useState } from "react"

export default function PageUseEffectDemo(){
    const [name, setName] = useState('Valon')
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            try{
                fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setProducts(data));
            }catch(error) {
                console.error('Error getting data')
            }
        }
        getProducts()
    }, [])

    console.log(products)
    return <div>
        <h1>hey i am {name}</h1>
        <button onClick={() => setName('Gazmend')}>Click to change name</button>
    </div>
}