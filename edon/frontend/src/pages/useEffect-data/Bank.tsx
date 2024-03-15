export default function Bank({dataUsers}){
    console.log(dataUsers.bank , 1)
    return <div>
        <p>cardExpire:{dataUsers.cardExpire} cardNumber:{dataUsers.cardNumber} cardType:{dataUsers.cardType} currency:{dataUsers.currency} iban:{dataUsers.iban}</p>
    </div>
}