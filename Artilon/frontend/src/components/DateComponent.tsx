function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year}`;
}

export default function DateComponent({ dateString }) {
    const Date = formatDate(dateString);

    return (
        <>
            {Date}
        </>
    );
}


