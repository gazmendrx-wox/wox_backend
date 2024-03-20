// ReviewItem.js
import Link from "next/link";
import FormattedDate from "@/components/FormattedData";

export default function ReviewData({ data }) {
  return (
    <div>
      {data.map(item => (
        <Link href={`/reviews/${item.id}`} key={item.id}>
    
            <h3>{item.id}-{item.value} created <FormattedDate dateString={item.created_at} /></h3>
        
        </Link>
      ))}
    </div>
  );
}
