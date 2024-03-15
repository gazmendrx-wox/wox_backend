/* Informata e Dyte = nje komponent me emrin Vendbanim, i cili shfaq vendbanimit e selektuar
 * nga Parent component*/

export default function Vendbanim({ fieldName, selectedOption, changeOption, options }) {
  return <div>
    {fieldName}:
    <select value={selectedOption} onChange={(e) => changeOption(e.target.value)}>
      <option value="">Select a city</option>
      {Array.isArray(options) && options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>


  </div>
}