

const main=async()=> {
  console.log("called")
  
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
console.log(transactions)
  await transactions.deployed();

  console.log("Deployed deployed to:", transactions.address);
}


const runMain=async()=>{
  try{
   
    await main();
    process.exit(0)
  }catch(err){
      console.log(err);
      process.exit(1);
  }}
runMain()
//pencil gesture dish zebra forum mention unable stadium glory timber modify jaguar
//0x70D257d0B9eF9d2A72085c6bd2C590526d9b8225