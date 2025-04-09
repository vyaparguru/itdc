import React from 'react';

const FileUpload = ({ label, onChange, preview }) => {
  return (
    <div>
      <label className="block text-md font-medium text-gray-700">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="mt-1 block w-full text-sm text-gray-500 "
      />
      <div className="mt-2 w-60 md:w-92 h-44 md:h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
        {preview ? (
          <img src={preview} alt={label} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-sm flex items-center justify-center h-full">
            Preview
          </span>
        )}
      </div>
    </div>
  );
};

export default FileUpload;