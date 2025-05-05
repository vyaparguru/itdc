export default function SelectField({ label, name, value, onChange, options = [], error }) {
    return (
      <div className="flex flex-col mb-4">
        <label className="font-semibold mb-1">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">Select</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </select>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    )
  }
  