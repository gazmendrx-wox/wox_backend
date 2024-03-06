
export default function Dropdown({fieldName, selectedOption, changeOption, options}){
  return <div>
  {fieldName}:
    <select value={selectedOption} onChange={(e) => changeOption(e.target.value)}>
      <option value="">Select a city</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
}