const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))

function sendCoin1(fromAddess, toAddress, amount) {
    return new Promise((resolve, reject) => {
        web3.eth.sendTransaction({ from: fromAddess, to: toAddress, value: web3.utils.toWei(amount, "ether") }, function(err, result) {
            if (!err) {
                resolve(result)
            } else {
                resolve('amount invalid')
            }
        })
    })
}

sendCoin1("0x102340A8b2766D280416539732fce638eEd18795","0xD3E09E43d05f78Af313AeC39C95e7f11b54e781D","20")

// var tuan = web3.eth.accounts.privateKeyToAccount("0xD3E09E43d05f78Af313AeC39C95e7f11b54e781D");
// console.log(tuan);
// console.log(Web3);

// const a = {};
// const b = {};

// const myMap = new Map([ [a, 'a'], [b, 'b'] ]);
// console.log(myMap); // Map { {} => 'a', {} => 'b' }

// ["0x5D227b6bF92C669df6E2bD47dB065D30C88F3225","0x102340A8b2766D280416539732fce638eEd18795","0xe5FEb63023830D80F625d64dCCAf59b1043DD2C5"]


// tx_id = 0xD3E09E43d05f78Af313AeC39C95e7f11b54e781D