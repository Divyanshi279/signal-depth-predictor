
import { useState } from 'react';
import { Upload } from 'lucide-react';

export const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="glass-card p-8 rounded-lg animate-fade-in">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg w-full hover:border-gray-400 transition-colors cursor-pointer">
          <label className="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">
              {file ? file.name : 'Upload RTL Module'}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".v,.sv,.svh"
            />
          </label>
        </div>
        {file && (
          <p className="text-sm text-gray-500">
            File size: {(file.size / 1024).toFixed(2)} KB
          </p>
        )}
      </div>
    </div>
  );
};
