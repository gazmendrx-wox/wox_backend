import Address from "./Address";
import Bank from "./Bank";
import Company from "./Company";
import Crypto from "./Crypto"
import Hair from "./Hair";

export default function User({id, firstName, lastname, address, bank, company, crypto, hair }){
    return <p key={id}>
        <div> 
            <h4> Emri: -{firstName} Mbiemri: -{lastname} me vendbanim ne : -<Address dataUsers={address} /></h4>
            <h4> Bank: <Bank dataUsers={bank}/>
             Company: <Company dataUsers={company}  address={address}/>
            crypto: - <Crypto dataUsers={crypto}/>
            hair: - <Hair dataUsers={hair} />
             </h4>



            
        </div>
    </p>
}