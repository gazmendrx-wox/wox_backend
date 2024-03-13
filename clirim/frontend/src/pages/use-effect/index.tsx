import { useEffect, useState } from "react"


export default function PageUseEffectDemo() {

    const [name, setName] = useState('clirim')
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            try{
                fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
            }catch(error){
                console.log('error geting data')
            }
        }
        getProducts()
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            try{
                fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
            }catch(error){
                console.log('error geting data')
            }
        }
        getProducts()
    }, [name])

    console.log(products)
    return <>
        <h1>hi i am {name}</h1>
        <button onClick={() => setName('edon')}>click to change name</button>
    </>
}