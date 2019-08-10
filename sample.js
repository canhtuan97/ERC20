const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const ERC20Contract = require('erc20-contract-js');

// Web3 instance
const web3 = new Web3(
	new Web3.providers.HttpProvider('https://ropsten.infura.io')
);

const walletAddr = '0xc257d91bf0129064340c037d9f9b29464638a351', // Your address here, or any address that you want to get balance
	contractAddr = '0x20fe562d797a42dcb3399062ae9546cd06f63280'; // Contract address

// Create new instance of ERC20Contract with contract address
const erc20Contract = new ERC20Contract(web3, contractAddr);

// Get balance
erc20Contract.balanceOf(walletAddr).call()
	.then(balance => console.log(`Balance: ${balance}`));

// Get total supply
erc20Contract.totalSupply().call()
	.then(totalBalance => console.log(`Total supply: ${totalBalance}`));

// Name
erc20Contract.name().call()
	.then(name => console.log(`Name: ${name}`));

// Sympol
erc20Contract.symbol().call()
	.then(symbol => console.log(`Symbol: ${symbol}`));

// Get decimals
erc20Contract.decimals().call()
	.then(decimals => console.log(`Decimals: ${decimals}`));