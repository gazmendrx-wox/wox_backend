import { useEffect, useState } from "react"

export default function PageUseEffectDemo() {

    const [name, setName] = useState('Jurik')
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            try {
                fetch('https://dummyjson.com/products')
                    .then(res => res.json())
                    .then(data => setProducts(data));
            }catch(error){
                console.log('Eror getting data')
            }
        }
        getProducts()
    }, [name])
    console.log(products)
    return <div>
        <h1> Hey I am {name}</h1>
        <button onClick={()=> setName('Artilon')}> Click to change name</button>
    </div>
}