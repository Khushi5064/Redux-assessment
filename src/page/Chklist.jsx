import React, { useState } from "react";

function App() {
  // Step 1: Create React state to track checkbox value
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false
  });

  // Step 2: Function to update checkbox value based on event.target.checked
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  return (
    <div>
      <h2>Are you a Citizen? Yes </h2>
      <h2>Are you over 21? No </h2>
      <input
        type="checkbox"
        name="Yes"
        checked={checkedItems.Yes}
        onChange={handleCheckboxChange}
      />
      Are you a Citizen?
      <br />
      <label>
        <input
          type="checkbox"
          name="No"
          checked={checkedItems.No}
          onChange={handleCheckboxChange}
        />
        Are you over 21?
      </label>
      <br />
      {/* Step 3: Display selected options dynamically */}
      <h3>Selected Options:</h3>
      <ul>
        {Object.entries(checkedItems).map(
          ([key, value]) => value && <li key={key}>{key}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
