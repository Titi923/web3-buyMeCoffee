import { useState,useEffect } from 'react'
import abi from "./contractJson/coffee.json"
import {ethers, BrowserProvider} from "ethers"
import './App.css'

// import Navbar from './components/Navbar';
import Buy from './components/Buy';

import './App.css';
import Transactions from './components/Transactions';

function App() {
    const [state,setState]=useState({
        provider:null,
        signer:null,
        contract:null
      })
      const [account,setAccount]=useState('Not connected');
      useEffect(()=>{
        const template=async()=>{
       
          const contractAddress="0xFB1f336F4b831EeD72e44C2b7FDF71d912466679";
          const contractAbi=abi;
          //Metamask part
          //1. In order do transactions on goerli testnet
          //2. Metmask consists of infura api which actually help in connectig to the blockhain
          try{
    
            const {ethereum}=window;
            const account = await ethereum.request({
              method:"eth_requestAccounts"
            })
     
            window.ethereum.on("accountsChanged",()=>{
             window.location.reload()
            })
            setAccount(account);
            const provider = new ethers.BrowserProvider(ethereum)
            const signer =  await provider.getSigner(); //write the blockchain
            
            const contract = new ethers.Contract(
              contractAddress,
              contractAbi,
              signer
            )
            console.log(contract)
            setState({provider,signer,contract});
           
          }catch(error){
            console.log(error)
          }
        }
        template();
      },[])
    return (
        <>
            {/* <Navbar /> */}
            <h1 className='text-center pt-2'>Get me a coffee</h1>

            <Buy state={state} />
            <Transactions state={state} />
        </>
    );
}

export default App;
