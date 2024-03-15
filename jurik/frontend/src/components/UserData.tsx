import React from "react";
import User from "./User";


 export default function UserData({ data }) {
    return (
        <div>
            {data.users.map((user) => (
                <User
                    key={user.id}
                    id={user.id}
                    firstname={user.firstName}
                    lastname={user.lastName}
                    address={user.address}
                    hairColor={user.hair.color}
                    jobTitle={user.company.title}
                />
            ))}
        </div>
    );
}

