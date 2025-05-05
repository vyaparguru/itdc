export default function FormFileUpload({ label, file, setFile, preview, setPreview }) {
    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-1">{label}</label>
        <input type="file" onChange={handleFileChange} className="mb-2" />
        {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded" />}
      </div>
    )
  }
  