import React, { useState } from "react";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      setAge(age - 1);
    } else {
      setAge(age);
    }
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label>Date of Birth: </label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
