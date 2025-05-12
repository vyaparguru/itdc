"use client"

export default function SelectField({ label, name, options = [], value, onChange }) {
    return (
      <div className="flex flex-col w-full">
        <label className="mb-1 font-medium">{label}</label>
        <select name={name} value={value} onChange={onChange} className="p-2 border border-gray-300 rounded">
          <option value="">Select</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    )
  }
  