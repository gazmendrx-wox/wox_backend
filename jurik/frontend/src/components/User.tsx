import React from "react";
import Address from "./Address";
import HairColor from "./HairColor";
import JobTitle from "./JobTitle";

const userCardStyles = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#f9f9f9',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr', // Two columns, first column takes 1 fraction of available space, second column takes 2 fractions
  gap: '8px', // Gap between grid items
};

const labelStyles = {
  fontWeight: 'bold',
};

function UserCard({ id, firstname, lastname, address, hairColor, jobTitle }) {
    return (
        <div style={userCardStyles} key={id}>
            <div style={labelStyles}>Emri:</div>
            <div>{firstname} {lastname}</div>
            <div style={labelStyles}>Address:</div>
            <div><Address {...address} /></div>
            <div style={labelStyles}>Hair Color:</div>
            <div><HairColor color={hairColor} /></div>
            <div style={labelStyles}>Job Title:</div>
            <div><JobTitle title={jobTitle} /></div>
        </div>
    );
}

export default UserCard;
