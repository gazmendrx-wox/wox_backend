import useFetch from "@/hooks/useFetch"


export default function Home() {
    const {data, loading} = useFetch('https://localhost:5050/reviews')

    return <>
        <p>list of reviews</p>
        <p>value - has been created: [created_at] and is Not modified if ,odifiet_at is null</p>
    </>
}