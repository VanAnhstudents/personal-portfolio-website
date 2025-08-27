import React, { useState } from "react";

const TextInput = ({
  isDarkMode,
  value,
  handleInputChange,
  textarea,
  label,
  type = "text",
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputComponent
        type={textarea ? undefined : type}
        className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
          isDarkMode
            ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
            : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
        } ${textarea ? "min-h-[120px]" : ""}`}
        value={value}
        onChange={({ target }) => handleInputChange(target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || value
            ? "top-2 text-xs text-blue-500"
            : "top-1/2 -translate-y-1/2 text-sm"
        } ${
          isDarkMode
            ? isFocused || value
              ? "text-blue-400"
              : "text-gray-400"
            : isFocused || value
            ? "text-blue-600"
            : "text-gray-500"
        } ${textarea && !isFocused && !value ? "top-6" : ""}`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
};

export default TextInput;
