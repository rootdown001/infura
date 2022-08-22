// const { Console } = require('console');
const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');
const HDWalletProvider = require('truffle-hdwallet-provider'); 

const address = '0xC7941a466524D3873050096FEf3679E8C7dEE9cB';
const privateKey = '0x5d8972a5476e5763900f56b8221bc2d6807e10bd6abd15b0e8b204726345f2c2'


const init = async () => {
    const provider = new HDWalletProvider(
        privateKey,
        'http://127.0.0.1:8545'
    );

    const web3 = new Web3(provider);
 
    const id = await web3.eth.net.getId();
    
    const deployedNetwork = MyContract.networks[id];
    
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );
    
    // const addresses = await web3.eth.getAccounts();

    await contract.methods
        .setData(24)
        .send({
            from: address
        });

    const result = await contract.methods
        .getData()
        .call();


    console.log(result);
} 

init();