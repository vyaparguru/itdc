export default function FormInput({ label, value, setValue, type = "text", placeholder }) {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-1">{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="border p-2 rounded"
        />
      </div>
    )
  }
  