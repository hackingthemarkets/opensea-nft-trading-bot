import { COLLECTION_ASSETS_URL, COLLECTION_URL, OPENSEA_API_KEY } from './constants.js';

// gets the floor price of a collection
export const getCollectionFloorPrice = async (collectionSlug) => {
    const url = `${COLLECTION_URL}/${collectionSlug}`;
    const floorPrice = await fetch(url)
        .then((r) => r.json())
        .then((response) => {
            return response.collection.stats.floor_price;
    });

    return floorPrice;
}