import React,{useState,useEffect} from "react";

import {ethers} from "ethers";

import {contractABI,contractAddress} from "../utils/constants"

export const TransactionContext = React.createContext();


const {ethereum}= window;

const getEtheriumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);

    console.log({
        provider,signer,transactionContract
    })

    return transactionContract;
}






export const TransactionProvider=({children})=>{

    const [connectedAccount, setconnectedAccount] = useState({})
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
   const [isLoading,setIsLoading]= useState(false)
   const [transactionCount, setTransactionsCount] = useState(localStorage.getItem("transactionCount"))
   const [transactions, setTransactions] = useState([]);
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };


      const getAllTransactions = async () => {
        try {
          if (ethereum) {
            const transactionsContract = getEtheriumContract();
    
            const availableTransactions = await transactionsContract.getAllTransactions();
    
            const structuredTransactions = availableTransactions.map((transaction) => ({
              addressTo: transaction.receiver,
              addressFrom: transaction.sender,
              timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
              message: transaction.message,
              keyword: transaction.keyword,
              amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }));
    
            console.log("Tejas",structuredTransactions);
    
            setTransactions(structuredTransactions);
          } else {
            console.log("Ethereum is not present");
          }
        } catch (error) {
          console.log(error);
        }
      };
   
    const checkIfWalletISConnect=async()=>{

        try{
            if(!ethereum)return alert("Please install metamask");
    
            const accounts =await ethereum.request({method:"eth_accounts"});
            console.log(accounts)
            if(accounts.length){
                setconnectedAccount(accounts[0])
            }
        }catch(err){

            console.log(err);
            throw new Error("no ethereum")
        }

       
    
    }

    const connectWallet=async()=>{
        try{
            
            if(!ethereum)return alert("Please install metamask");
            const accounts =await ethereum.request({method:"eth_requestAccounts"});
           setconnectedAccount(accounts[0])
        }catch(err){
            console.log(err)
            throw new Error("no ethereum")
        }
    }


    const sendTransaction=async ()=>{
        try{
           console.log("called2")
            if(!ethereum)return alert("install metamask");
  const {addressTo,amount,keyword,message}= formData;
            
            const transactionContract= getEtheriumContract()
            const parsedAmount  = ethers.utils.parseEther(amount);
            await ethereum.request({
                method:"eth_sendTransaction",
                params:[{
                    from : connectedAccount,
                    to:addressTo,
                    gas:"0x5208",
                    value:parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword)
        
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);
            console.log()
           const transactionsCount = await transactionContract.getAllTransactionCount();
    
            setTransactionsCount(transactionsCount.toNumber());
        }catch(err){
            console.log(err)
            throw new Error("no ethereum")
        }
    }
    
    useEffect(()=>{
        checkIfWalletISConnect();
        getAllTransactions();
    },[])


return(   <TransactionContext.Provider  value={{formData,sendTransaction,connectWallet,connectedAccount,handleChange,transactions,isLoading,transactionCount,}}>
    {children}
</TransactionContext.Provider>)
 
}