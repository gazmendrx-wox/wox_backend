import '../css/user.css'
import Address from "./Address"
import Work from './Work';

export default function User({ firstname, lastname, address ,company}) {
    
    return (
        <div className="user-container">
          <div className="user-info">
            <p><strong>Emri:</strong> {firstname}</p>
            <p><strong>Mbiemri:</strong> {lastname}</p>
            <p><strong>Vendbanimi:</strong></p>
            <Address data={address} />
            <p><strong>Punësimi:</strong></p>
            <Work data={company} />
          </div>
        </div>
      );
    }
  
  