const { default: Web3 } = require("web3");

const MyContract = artifacts.require('MyContract');

module.exports = async function(deployer, _, accounts) {
    await deployer.deploy(MyContract);
    await web3.eth.sendTransaction({
        from: accounts[0],
        to: '0xC7941a466524D3873050096FEf3679E8C7dEE9cB',
        value: web3.utils.toWei('1', 'ether')
    });

}
