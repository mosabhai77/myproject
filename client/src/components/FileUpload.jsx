import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const Input=({placeholder, name, type, value, handleChange})=>(
  <input
  placeholder={placeholder}
  type={type}
  step="0.0001"
  value={value}
  onChange={(e)=>handleChange(e,name)}
  className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
);

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `587244d22345a10c22ec`,
            pinata_secret_api_key: `a06b0ed995d5d43d755d399331b076beec2e9e1671cf7dc412bd544fb2c40d39`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account,ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (

    <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
      
    <form className='p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism' onSubmit={handleSubmit}>
    <label htmlFor="file-upload" className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white mb-5'>
  Choose Image
  </label>
  <input
  disabled={!account}
  type="file"
  id="file-upload"
  name="data"
  onChange={retrieveFile}
  />

      <span className="textArea">Image: {fileName}</span>
      <button type="submit" className='text-white w-full mt-5 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer' disabled={!file}>
        Upload File
      </button>
    </form>
  </div>
  
  );
};
export default FileUpload;