import { useEffect, useState } from 'react'
import Data from '@/components/data'
import useFetch from './useFetch'

export default function UseEffectHomework(){
    const { products: dataProducts, loading: loadingProducts } = useFetch("https://dummyjson.com/products")

    if(loadingProducts){
        console.log("Loading...")
    }

    if(!loadingProducts){
        console.log("Products", dataProducts )
    }

    return <div>
        {dataProducts && <Data dataProducts={dataProducts}/>}
    </div>

}
