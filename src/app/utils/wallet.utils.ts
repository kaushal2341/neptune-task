import { getBalance, getChainId } from "../services/ether";

export const connectToWallet = async() =>{

 if(typeof window?.ethereum==='undefined'){
   console.log('not detected');
 }else{
    console.log("detected",window?.ethereum);
    const accounts = await getAccounts();
    if(accounts.length){
     const balance = await getBalance(accounts[0]);
     const chainId = await getChainId();
    }

 }
 
}

const getAccounts = async() =>{

    try{
      const accounts = await   window.ethereum?.request({
        method:"eth_requestAccounts"
      })
      return accounts;
    }catch(e){
        console.log("====error",e)
        return []
    }
}