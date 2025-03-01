import React from 'react';
import { Input } from '@heroui/react';
import { CloseIcon, CloudUploadIcon, PdfIcon } from '@/assets';

export const FileUpload = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className='w-full'>
    <label htmlFor="file-input" className=" p-7 flex border-dashed  border-2 border-[#B6BFEC] bg-[#F4F5FA] flex-col items-center gap-4  rounded-lg w-full">
      <Input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="file-input"
      />
        <div className='flex flex-col items-center gap-[0.625rem]'>
        <PdfIcon/>
        <div className='flex text-[#4A4A4A] gap-3 items-center'>
        <CloudUploadIcon/>
        <p className='font-h7  font-medium'>Upload pdf</p>
        </div>
      </div>
    
 
    </label>
    {file && (      
        <div className="flex gap-10 mt-2 border rounded-lg">
          <span className='text-3 text-[#8B8D97]'>{file.name}</span>
          <button onClick={handleRemoveFile}>
            <CloseIcon className="text-red-500 cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  );
};