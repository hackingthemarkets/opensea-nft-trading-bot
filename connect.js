import HDWalletProvider from '@truffle/hdwallet-provider';
import { OpenSeaPort, Network } from 'opensea-js';
import { ALCHEMY_API_URL, OPENSEA_API_KEY, WALLET_MNEMONIC } from './constants.js';

// you need to connect to a node provider (Alchemy) 
// you need to provide a key or mnemonic to make an offer and sign the transaction with your wallet
const provider = new HDWalletProvider(WALLET_MNEMONIC, ALCHEMY_API_URL);

// connect to open sea, requires a provider (initialized above) and an API KEY
// you can connect to ethereum mainnet or a testnet
export const seaport = new OpenSeaPort(provider, {
  apiKey: OPENSEA_API_KEY,
  networkName: Network.Main
});
