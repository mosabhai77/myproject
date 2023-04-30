import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import {Loader}  from './';
import React from 'react';
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const Input=({placeholder, name, type, value, handleChange})=>(
    <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e)=>handleChange(e,name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border-none text-sm white-glassmorphism'
    />
);

const Welcome = () => {
  const connectWallet=()=>{

}

const handleSubmit = () => {

}

  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
      <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-left">
        Decentralized <br/> Image Safeguarding
        </h1>
        <p className='text-left mt-5 text-white font-light text-base md:w-9/12 w-11/12'>
        Decentralizing Image Storage with Meta Drive:<br/> Powered by IPFS and Secured by Pinata.
        </p>
        <button
        type="button"
        onClick={connectWallet}
        className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 px-10 rounded-full cursor-pointer hover:bg-[#2546bd]'>
        <p className='text-white text-base font-semibold'>Connect Wallet</p>
        </button>
        <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
         <div className={`rounded-tl-2xl ${commonStyles}`}>
          Reliability
         </div>
         <div className={commonStyles}>
          Security
         </div>
         <div className={`rounded-tr-2xl ${commonStyles}`}>
          Ethereum
         </div>
         <div className={`rounded-bl-2xl ${commonStyles}`}>
          Web 3.0
         </div>
         <div className={commonStyles}>
          IPFS
         </div>
         <div className={`rounded-br-2xl ${commonStyles}`}>
          Pinata
         </div>
        </div>
      </div>

      <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
        <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
          <div className='flex justify-between flex-col w-full h-full'>
          <div className='flex justify-between items-start'>
            <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
              <SiEthereum fontSize={21} color="#fff"/>
            </div>
            <BsInfoCircle fontSize={17} color='#fff' />
          </div>
          <div className='text-left'>
            <p className='text-white font-light text-sm'>
              Address
            </p>
            <p className='text-white font-semibold text-lg mt-1'>
              Ethereum
            </p>
          </div>
        </div>
      </div>
      {/* Changes Here for upload image button */}
      <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
      <Input placeholder="Enter Address" name="addressTo" type="text" handleChange={()=>{}} />
      
      {false ?(
        <Loader/>
      ): (
        <button
        type='button'
        onClick={handleSubmit}
        className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'>
          Connect
        </button>
      )}
      </div>

    </div>
  </div>
</div>
  );
}

export default Welcome;

// const Welcome = () => {
//   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

//   const handleSubmit = (e) => {
//     const { addressTo, amount, keyword, message } = formData;

//     e.preventDefault();

//     if (!addressTo || !amount || !keyword || !message) return;

//     sendTransaction();
//   };

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [provider, setProvider] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const loadProvider = async () => {
//       if (provider) {
//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });

//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });
//         await provider.send("eth_requestAccounts", []);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setAccount(address);
//         let contractAddress = "Your Contract Address Here";

//         const contract = new ethers.Contract(
//           contractAddress,
//           Upload.abi,
//           signer
//         );
//         //console.log(contract);
//         setContract(contract);
//         setProvider(provider);
//       } else {
//         console.error("Metamask is not installed");
//       }
//     };
//     provider && loadProvider();
//   }, []);