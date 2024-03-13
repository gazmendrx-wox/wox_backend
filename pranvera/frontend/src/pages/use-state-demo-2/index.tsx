import Person from "@/components/Person";
import ReactDropdown from "@/components/ReactDropdown";
import TextInput from "@/components/TextInput";
import { useState } from "react";

export default function StateDemoTwo() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const data = {
    cars: {
      id: 1,
      name: "cars",
      options: [
        {
          id: 1,
          name: "Mercedes",
          value: "mercedes",
        },
        {
          id: 2,
          name: "BMW",
          value: "bmw",
        },
      ],
    },
    motorcycles: {
      id: 2,
      name: "motorcycles",
      options: [
        {
          id: 1,
          name: "Mercedes",
          value: "mercedes",
        },
        {
          id: 2,
          name: "BMW",
          value: "bmw",
        },
      ],
    },
  };

  return (
    <>
      <TextInput fieldName={"Name"} text={name} handleChangeText={setName} />
      <TextInput
        fieldName={"Surname"}
        text={surname}
        handleChangeText={setSurname}
      />
      <Person name={name} />
      {/** THIS IS BAD - OLD HTML */}
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <select name="motorcycles" id="motorcycles">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      {/** THIS IS GOOD - REACT WAY */}
      <ReactDropdown
        name={data.cars.name}
        id={data.cars.id}
        options={data.cars.options}
      />
      <ReactDropdown
        name={data.cars.name}
        id={data.cars.id}
        options={data.cars.options}
      />
      <button onClick={() => alert(`hello i am ${name} ${surname}`)}>
        Show Selected Values
      </button>
    </>
  );
}
