async function getReviews() {
    const res = await fetch('http://host.docker.internal:3001/reviews', { cache: 'no-store', mode: 'no-cors' })
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Reviews() {
    const reviews = await getReviews()
   
    console.log('review', reviews);
    return <h1>Epic reviews {reviews.length}</h1>
  }