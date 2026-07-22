import React from 'react';

interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  value: FileList | File[] | null;
  onChange: (files: FileList | File[] | null) => void;
  preview?: boolean;
  maxSizeMB?: number; // maximum file size in MB
  disabled?: boolean;
  className?: string;
}

export default function FileUpload({
  label = 'Upload file',
  accept = '*/*',
  multiple = false,
  value,
  onChange,
  preview = true,
  maxSizeMB = 5,
  disabled = false,
  className = '',
}: FileUploadProps) {
  const fileList = value instanceof FileList ? Array.from(value) : (value as File[] || []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      onChange(null);
      return;
    }

    // Validate file size if maxSizeMB is set
    if (maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      const oversized = Array.from(files).some((file) => file.size > maxSizeBytes);
      if (oversized) {
        alert(`File size exceeds ${maxSizeMB} MB limit.`);
        return;
      }
    }

    onChange(files);
  };

  const getFileUrl = (file: File) => URL.createObjectURL(file);

  const removeFile = () => {
    onChange(null);
  };

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            className={"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 ${
              disabled ? 'cursor-not-allowed opacity-50' : ''
            }"}
            onChange={handleChange}
          />
          {preview &&
            fileList.length > 0 &&
            fileList.map((file, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center">
                {file.type.startsWith('image/') ? (
                  <img
                    src={getFileUrl(file)}
                    alt={`Preview`}
                    className="h-16 w-16 object-cover rounded-md border border-gray-200"
                  />
                ) : (
                  <div className="h-16 w-16 flex items-center justify-center bg-gray-200 rounded-md text-gray-500">
                    {file.type.split('/')[0].toUpperCase()}
                  </div>
                )}
                <div className="mt-2 text-sm text-gray-600">
                  <span className="truncate max-w-xs" title={file.name}>
                    {file.name}
                  </span>
                  <br />
                  <span className="text-xs">
                    {file.size > 1024 * 1024
                      ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                      : `${(file.size / 1024).toFixed(1)} KB`}
                  </span>
                </div>
                {!disabled && (
                  <button
                    type="button"
                    onClick={() => removeFile()}
                    className="mt-1 px-2 py-0.5 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </>
                )}
              </div>
            ))}
        </div>

        {/* Show file names and sizes for multiple files */}
        {!preview &&
          fileList.length > 0 &&
          (
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              {fileList.map((file, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <dot className="h-2.5 w-2.5 bg-gray-400 rounded-full" />
                  <span
                    title={file.name}
                    className="line-clamp-1 max-w-xs"
                  >
                    {file.name}
                  </span>
                  {file.size > 1024 * 1024 ? (
                    <span className="ml-2">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
                  ) : (
                    <span className="ml-2">
                      {(file.size / 1024).toFixed(1)} KB
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

// Helper component for the dot in file list
function dot() {
  return <span className="h-2.5 w-2.5 bg-gray-400 rounded-full" />;
}