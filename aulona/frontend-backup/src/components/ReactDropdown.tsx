export default function ReactDropdown({name, id, options}) {
    return (
        <select name={name} id={id}>
            {
                options.map((option) => <option value={option.value}>{option.name}</option>)
            }
        </select>
    )
}