import { useEffect, useState } from 'react'
import Produkti from '@/components/produkti'

export default function UseEffectHomework(){
    const [products, setProducts] = useState()

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
        {<Produkti products={products}/>}
    </div>

}
