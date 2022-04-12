require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember push grace opinion tattoo spoil'; 
let testAccounts = [
"0x0d00b89b91955d7961b125f63cee31e615dbc8bdafba8a1a521920ebb6eeaebd",
"0xb2e2c7d50bb5172fe52fe27985baf2ae4f7fece020b194f6ff2d1e8036b7334a",
"0x171049da980c2834bf3bf847be8ec96597515d8c25b72525008d03aab11353a4",
"0x33cc80d476ae395956b04701e51653e99313a15c4c93241aac108a764a4e46cb",
"0x2eec6d69e1f7a40e585b9496418507b50524ae576ad190f34e24a141b49d5179",
"0x8de4a5fe0ce4ab3aa7a2608cc45646349fe3770f595adfce4e4c62cf8993d0c7",
"0x0b2e0a623fa84443dcf9fa2c39b94335270b0cbd90e03d22ddac16bb6c469e77",
"0xe9eb79ab6e8eb80d0babbc16979e92ee42de6058bd5042b32a6e561e51cc9a47",
"0x61b200c212b3abe9376e667e03a832efd1f88f5b7001b435623cbf2f32418bca",
"0xbf71303e7c41f5f156f4bb744820052ff0b48c1fc61c5107e7deba627be520f5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

