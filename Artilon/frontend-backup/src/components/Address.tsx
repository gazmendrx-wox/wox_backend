import '../css/user.css'

export default function Address({data}){
    return <div className='address-container'>
        <p>{data.address} {data.city}</p>
    </div>
}
