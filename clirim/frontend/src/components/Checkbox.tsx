
export default function Checkbox({ fieldName, selectedOptions, changeOption, options }) {

  const handleCheckboxChange = (option) => {
      if (selectedOptions !== option) {
        changeOption(option);
      }
    };
  return (
    <div>
      {fieldName}:
    {options.map((option) => (
      <div key={option}>
        <input
          type="checkbox"
          id={option}
          value={option}
          checked={selectedOptions.includes(option)}
          onChange={() => handleCheckboxChange(option)}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
    </div>
  );
}