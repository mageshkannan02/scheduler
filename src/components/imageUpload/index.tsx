import React from "react";
import { Input } from "@heroui/react";
import { CloseIcon, CloudUploadIcon, GalleryIcon } from "@/assets";

export const ImageUpload = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full">
      <label
        htmlFor="image-input"
        className="p-7 flex bg-[#F4F5FA] flex-col items-center gap-4 rounded-lg w-full"
      >
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="image-input"
        />
        <div className="flex flex-col items-center gap-[0.625rem]">
          <GalleryIcon />

          <div className="flex gap-3 items-center text-[#005840]">
            <CloudUploadIcon />
            <p className="text-body2 font-medium">Upload an image</p>
          </div>
          <div className="text-body2 text-[#8B8D97] font-medium flex flex-col items-center">
            <p>Upload a cover image for your</p>
            <p>image</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-body2 text-[#8B8D97] font-medium font-sans ">
              File Format <span className="text-[#2C2D33]">jpeg, png</span>{" "}
              Recommened{" "}
            </p>
            <span className="text-[#2C2D33]">Size 600x600 (1:1)</span>
          </div>
        </div>
      </label>
      {file && (
        <div className="flex gap-10 mt-2">
          <span className="text-3 text-[#8B8D97]">{file.name}</span>
          <button onClick={handleRemoveFile}>
            <CloseIcon className="text-red-500 cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  );
};
