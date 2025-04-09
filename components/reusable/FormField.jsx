"use client"

import React from 'react';

const FormField = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  options = [],
  accept,
  readOnly = false,
}) => {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      {type === "select" ? (
        <select
          className="input select w-full h-10"
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="input w-full"
          value={value}
          onChange={onChange}
          accept={accept}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};

export default FormField;