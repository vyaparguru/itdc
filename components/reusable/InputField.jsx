export default function InputField({ label, name, type = "text", value, onChange, error }) {
    return (
      <div className="flex flex-col mb-4">
        <label className="font-semibold mb-1">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded p-2"
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    )
  }
  