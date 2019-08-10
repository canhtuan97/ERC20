const request = require('request');

const Web3 = require('web3');
const abi = require('./1.json')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
const contract =web3.eth.contract(abi).at('0x46C0F6a0646333223c26c69591811877698B22b9');
var contract1 = new eth.Contract(abi, address, {gasPrice: '12345678', from: fromAddress});
console.log(contract);
var address = "0x5D227b6bF92C669df6E2bD47dB065D30C88F3225"
var addressto = "0xe5FEb63023830D80F625d64dCCAf59b1043DD2C5"
var tranfer = contract.transfer(addressto,2000,{from :address,gas : 500000})
console.log(tranfer);
