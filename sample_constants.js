/*
NFT constants

example: crypto coven collection
https://opensea.io/collection/cryptocoven

the cryptocoven slug is: cryptocoven

blackberry, the mercurial pearl in the crypto coven collection
https://opensea.io/assets/0x5180db8f5c931aae63c74266b211f580155ecac8/3835

the crypto coven collection nft contract is 0x5180db8f5c931aae63c74266b211f580155ecac8
blackberry, the mercurial pearl is token id 3835
if you aren't targeting a single NFT, you can dynamically fetch this information
*/
export const COLLECTION_SLUG = 'cryptocoven';
export const COLLECTION_URL = 'https://api.opensea.io/api/v1/collection/';
export const COLLECTION_CONTRACT_ADDRESS = '0x5180db8f5c931aae63c74266b211f580155ecac8';
export const COLLECTION_ASSETS_URL = `https://api.opensea.io/api/v1/assets?order_direction=desc&limit=200&include_orders=false`;
export const TOKEN_ID = '3835';

// request an OpenSea API Key at: https://docs.opensea.io/
export const OPENSEA_API_KEY = 'YOUR_OPENSEA_API_KEY';

// sign up for alchemy and copy your key from the dashboard
export const ALCHEMY_API_KEY = 'YOUR_ALCHEMY_API_KEY';
export const ALCHEMY_API_URL = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`;
export const ALCHEMY_NFT_API_COLLECTION_URL = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}/getNFTsForCollection`;

// wallet addresses
export const WALLET_ADDRESS = 'YOUR_WALLET_ADDRESS';
export const WALLET_MNEMONIC = '12 WORD SEED PHRASE';
