require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strong radar shift protect gloom drop slot gas'; 
let testAccounts = [
"0xb3e981bfb8e2e4e1a181c4c8d8fb8437d4892af579591c20171541b6d11e1fd1",
"0xcee7a9276bf22aa8fa791a099aeb038461d081a166ed0a659055c1e0e5ea5ce6",
"0x416097a00e46b52d599a763250628c09ada943585a310690f803ed5c2da444e9",
"0x700200fe0ebb61a6109158f63833c9c9718bf5068fb02266954615903a43aea3",
"0x4592be48721c636972059f322b1f913cca46d013f0383a2e593836242cc6dd67",
"0x5d23d9048147d93b3db6b75310b24630b40f3769682c5ee74783f44147aa3b2a",
"0x9f6812aa30c517a6cabb1c940ae2d44a49734bf6051734c218ae6d826201a5df",
"0x613086191dc13a7374441ca119bcacc19f5ec73660ae563b00cc9583fc0b0724",
"0xed8d4f5537678c67acbb81bff645f9ba02aab2164ff8c546be76917bfd664166",
"0xf12f016a470c4722602003f8da08bae3b08903d7904d086a85811d80dad8d5c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
