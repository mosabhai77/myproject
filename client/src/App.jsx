import React, { useState, useEffect } from 'react';
import { Navbar, Welcome, Display, FileUpload, Modal, Footer, Loader } from './components';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        // Check if MetaMask is installed
        if (typeof window.ethereum === "undefined") {
          throw new Error("MetaMask not detected. Please install MetaMask and refresh the page.");
        }

        // Initialize Web3 provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Handle provider events
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        // Request access to user's MetaMask account
        const [address] = await provider.request({ method: "eth_requestAccounts" });
        setAccount(address);

        // Load contract
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
        setContract(contract);
        setProvider(provider);
      } catch (error) {
        setError(error.message);
      }
    };

    loadProvider();
  }, []);

  return (
    
    <div className="h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
   
    <div className="gradient-bg-fileupload">
  
      <FileUpload account={account} provider={provider} contract={contract} />
      
    </div>
    <div className="gradient-bg-display">
      <Display contract={contract} account={account} />
    </div>
    <Footer />
  </div>
  
  );
};

export default App;
