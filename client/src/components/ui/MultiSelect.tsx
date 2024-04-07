import React, { useState, useRef, useEffect } from "react";

const MultiSelect: React.FC<{ options: string[] }> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options); // Initialize with all options
  const multiSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        multiSelectRef.current &&
        !multiSelectRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    filterOptions(value);
    setShowDropdown(true);
  };

  const filterOptions = (input: string) => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (filteredOptions.length > 0) {
        handleSelect(filteredOptions[0]);
      }
    }
  };

  const handleSelect = (option: string) => {
    setSelectedOptions([option]); // Clear selectedOptions and select the new option
    setInputValue("");
    setShowDropdown(false);
  };

  const handleMultiSelectClick = () => {
    setShowDropdown(true);
  };

  return (
    <div
      ref={multiSelectRef}
      className="relative"
      onClick={handleMultiSelectClick}
    >
      <div className="flex flex-wrap">
        {selectedOptions.map((option, index) => (
          <div key={index} className="m-1 bg-blue-500 rounded p-2">
            <span>{option}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type language..."
        className="mt-2 p-1 border rounded bg-transparent"
        onMouseDown={() => setShowDropdown(true)}
      />
      {showDropdown && (
        <div className="absolute top-full left-0 w-full border border-blue-500 shadow-md z-10 bg-transparent">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-500 bg-transparent"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
