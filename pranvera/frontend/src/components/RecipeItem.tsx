import Link from "next/link";
import Image from "next/image";

const RecipeItem = ({ id, name, image }) => {
  return (
    <div className="card">
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image src={image} layout="fill" objectFit="cover" alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link href={`/use-effect-homework/${id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
