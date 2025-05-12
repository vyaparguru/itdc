"use client"

export default function FileUpload({ label, name, onChange }) {
    return (
      <div className="flex flex-col w-full">
        <label className="mb-1 font-medium">{label}</label>
        <input type="file" name={name} accept="image/*" onChange={onChange} className="p-2" />
      </div>
    )
  }
  