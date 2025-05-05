export default function FormSelect({ label, value, setValue, options }) {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-1">{label}</label>
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    )
  }
  