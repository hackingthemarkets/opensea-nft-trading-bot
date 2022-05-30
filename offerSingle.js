import { seaport } from './connect.js';
import { COLLECTION_SLUG, TOKEN_ID, WALLET_ADDRESS, COLLECTION_CONTRACT_ADDRESS } from './constants.js';
import { getCollectionFloorPrice } from './nftFunctions.js'

// make an offer for 70% of floor price for blackberry the mercurial pearl
const floorPrice = await getCollectionFloorPrice(COLLECTION_SLUG);

const floorPriceMultiple = 0.05; // offer at 95% below floor price
const offerAmount = floorPrice * floorPriceMultiple;

const offer = await seaport.createBuyOrder({
    asset: {
      tokenId: TOKEN_ID,
      tokenAddress: COLLECTION_CONTRACT_ADDRESS
    },
    accountAddress: WALLET_ADDRESS,
    startAmount: offerAmount, // offer amount in in wrapped ether
    expirationTime: Math.round(Date.now() / 1000 + (20 * 60)) // twenty minutes from now
});

console.log(offer);