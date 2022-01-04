import {ethers} from "ethers";

async function  GasfeeGenerator(address) {
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/607f3ee433c34179a3a67a9855d81a14");
    // const gas= await provider.getBlockNumber()
    // console.log(gas)
    const tx= await provider.getTransactionReceipt(address)
    // const gas= tx.effectiveGasPrice
    // const gass = parseInt(gas)
    // // console.log(gass)
    // const FeeData= await provider.getFeeData()
    // const PriorityFee= FeeData.maxPriorityFeePerGas()
    // console.log(tx)
    // const feedata= await provider.getFeeData()
    // const maxfeepriority= feedata.maxPriorityFeePerGas
    const gasused= parseInt(tx.gasUsed)
    // console.log(gasused)
    const effectiveGaspriced= (tx.effectiveGasPrice)
    const effectivegaswei= effectiveGaspriced
    // console.log(effectivegaswei)
    const weitransactionfee= effectivegaswei*gasused
    const ethTransactionfee= ethers.utils.formatEther(weitransactionfee)
    console.log(ethTransactionfee)
    const nonce= await provider.getTransactionCount("0x278c990aa21eebe37b5d28a322ae79b37c755ceb")
    console.log(nonce)

};
GasfeeGenerator("0xef0473a37cc7c27f8f20a86655cfa55e7d7495af02a82f418299b5245cb03b2c")

