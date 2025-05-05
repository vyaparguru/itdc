'use client'
export default function PreviewImage({ file }) {
  return (
    <div className="h-32 w-32 border flex items-center justify-center">
      {file ? <img src={URL.createObjectURL(file)} alt="Profile Preview" className="h-full w-full object-cover" /> : "No Image"}
    </div>
  )
}
