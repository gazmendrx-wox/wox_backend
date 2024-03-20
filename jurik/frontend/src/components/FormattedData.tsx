// FormattedDate.js
import React from 'react';

export default function FormattedDate({ dateString }) {
    
    const formattedDate = formatDate(dateString);

    return <>{formattedDate}</>;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year}`;
}


