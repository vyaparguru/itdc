export default function FileUpload({ label, name, onChange, preview }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-1">{label}</label>
      <input
        type="file"
        name={name}
        accept="image/*"
        onChange={onChange}
        className="border border-gray-300 rounded p-2"
      />
      {preview && <img src={preview} alt="preview" className="w-32 h-32 object-cover mt-2" />}
    </div>
  )
}
