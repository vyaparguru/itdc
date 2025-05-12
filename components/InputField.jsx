"use client"
export default function InputField({ label, type = 'text', name, value, onChange, required = false }) {
    return (
      <div className="flex flex-col w-full">
        <label className="mb-1 font-medium">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded"
          required={required}
        />
      </div>
    )
  }
  