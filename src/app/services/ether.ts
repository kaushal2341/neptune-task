import {ethers}  from "ethers";

export const getChainId = async ()=>{
    const providers = new ethers.BrowserProvider(window.ethereum);
    const chainId = await providers.getNetwork()
    return chainId;
}
export const getBalance = async(address:string) =>{
    const providers = new ethers.BrowserProvider(window.ethereum);
    const balance = await providers.getBalance(address)
    return balance;
}