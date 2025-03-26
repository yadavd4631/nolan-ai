import React from "react";
import { UploadCloud, X } from "lucide-react";

function VideoUpload({ close }) {
  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg w-96 text-center relative">
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <UploadCloud className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <input type="file" id="fileInput" className="hidden" />
        <button
          onClick={handleUploadClick}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:shadow-lg transition duration-300"
        >
          Upload Video From Computer
        </button>
      </div>
    </div>
  );
}

export default VideoUpload;
