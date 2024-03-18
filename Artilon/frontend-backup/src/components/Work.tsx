export default function Work(company){
    return <div>
        <p>Company : {company.data.name}</p> 
        <p>Positon : {company.data.title}</p>
        <p>Department: {company.data.department}</p> 
    </div>
}