/**
 * Informata e trete = nje komponent me emrin Profesion, i cili shfaq profesionin e cekur
 * nga Parent component
 */

export default function Profesion({ fieldName, selectedOption, changeOption, options }) {
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
  