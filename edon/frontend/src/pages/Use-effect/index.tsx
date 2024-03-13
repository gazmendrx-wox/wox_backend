import { useEffect, useState } from 'react'

export default function PageUseEffect () {
    const [name, setName] = useState('Gazmend')
    const [products,setProducts] = useState(null)

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

    useEffect (() => {
            document.title = name
    }, [name])

    console.log(products)
    return <div>
            <h1>Hey I am {name}</h1>
            <button onClick ={() => setName('Edon')}>Click to change name</button>
    </div>

}