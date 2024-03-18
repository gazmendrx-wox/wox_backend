import { useEffect, useState } from 'react'

export default function PageUseEffectDemo(){
    const [name, setName] = useState('Gazmend') 
    const [products, setProducts] = useState(null)
    const [position, setPosition] = useState({x: 0, y: 0})

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
    }, [])// useEffect, pranon callback function, edhe nje dependency array 

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
    }, [name])// useEffect, pranon callback function, edhe nje dependency array 

    useEffect(() => {
        document.title = name
    }, [name])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        document.addEventListener('mousemove', handleMouseMove)

        //cleanup function - a.k.a when component unmounts/destroyed
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }

    },[]) //dependency array kur eshte e zbrazet nenkupton thirrjen ose render vetem nje here
    return <div>
        <h1>Hey I am {name}</h1>
        <button onClick={() => setName('Edon')}>Click to change name</button>
        <p>Current mouse position: {position.x} - {position.y}</p>
    </div>
}