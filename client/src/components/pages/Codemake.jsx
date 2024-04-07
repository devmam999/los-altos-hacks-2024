import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MultiSelect from "../ui/MultiSelect";

export let codeValue = ""; // Exporting code state variable
export let problemValue = ""; // Exporting problem state variable
export let selectedLanguageValue = ""; // Exporting selectedLanguage state variable

export function Codemake() {
  const [code, setCode] = useState(""); // State variable for code
  const [problem, setProblem] = useState(""); // State variable for problem
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State variable for selected language

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    codeValue = event.target.value; // Assigning value to the exported variable
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
    problemValue = event.target.value; // Assigning value to the exported variable
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    selectedLanguageValue = selectedOption; // Assigning value to the exported variable
  };

  const handleSubmit = () => {
    // Do something with code, problem, and selectedLanguage
    console.log("Code:", code);
    console.log("Problem:", problem);
    console.log("Selected Language:", selectedLanguage);
  };

  const options = ["Python", "Java", "C++", "C", "C#", "Javascript", "HTML", "React", "SQL"];

  return (
    <div className="relative pl-16 mt-16">
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-white relative z-20 mb-8">
        <span style={{ color: '#8932a8' }}>C</span>
        <span style={{ color: '#248fe0' }}>o</span>
        <span style={{ color: '#e0a536' }}>d</span>
        <span style={{ color: '#0000ff' }}>e</span>
        <span style={{ color: '#ffff00' }}>m</span>
        <span style={{ color: '#f7ee6f' }}>a</span>
        <span style={{ color: '#8932a8' }}>k</span>
        <span style={{ color: '#248fe0' }}>e</span>
        <span style={{ color: '#e0a536' }}>r</span>
      </h1>
      <textarea
        className="w-1/2 h-64 p-4 border rounded focus:outline-none focus:border-blue-500 bg-transparent"
        placeholder="Enter your code here..."
        value={code}
        onChange={handleCodeChange}
      />
      <div className="absolute top-0 right-0 mr-36 mt-8">
        <h1 className="md:text-3xl text-3xl lg:text-3xl font-bold text-white relative z-20 mb-8">Choose your language:</h1>
        <MultiSelect options={options} onChange={handleLanguageChange} />
      </div>
      <div className="mt-16">
        <textarea
          className="w-1/2 h-16 p-4 border rounded focus:outline-none focus:border-blue-500 bg-transparent"
          placeholder="Enter your problem here..."
          value={problem}
          onChange={handleProblemChange}
        />
      </div>
      <div className="absolute right-0 bottom-0 mr-64 flex flex-col items-center justify-center">
        <Link to="/finalproduct" className="mx-auto">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-16 mx-auto z-50 relative" onClick={handleSubmit}>
            Get Started!
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Codemake;
