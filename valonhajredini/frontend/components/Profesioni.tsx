export default function Profesioni({ fieldName, selectedOption, changeOption, options }) {
    const handleCheckboxChange = (option) => {
      changeOption(option);
    };
  
    return (
      <div>
        {fieldName}:
        <div>
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  }
  