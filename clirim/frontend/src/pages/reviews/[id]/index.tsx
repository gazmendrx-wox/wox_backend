"use client"
import { useRouter } from "next/router"

export default function ReviewById(){

    const router = useRouter()

    const { id } = router.query

    // const searchParams= useSearchParams({params})

    // const id = searchParams?.get('id')


    return<div>
        <h1>hello i am {id}</h1>
    </div>
}