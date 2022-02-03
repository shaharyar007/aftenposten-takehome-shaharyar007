import { ITeaser } from "../../types";

/**
 * Function that generates URL of an image hosted on CDN
 * @param {ITeaser} t - A teaser param that contains image ID
 * @returns {string} image URL 
 */
export const getImageUrl = (t: ITeaser): string => {
    // make sure we return the right image size based on the card size
    return t.image?.imageAsset ? `https://premium.vgc.no/v2/images/${t.image.imageAsset.id}?fit=crop&h=214&tight=true&w=380` : 'https://www.aftenposten.no/seksjon/img/newfront/ap_fallback_image.png';
};

/**
 * Function that checks whether article is open or closed based on restriction information
 * @param {ITeaser} t - A teaser param that contains restriction information
 * @returns {boolean} Whether article is open or closed
 */
export const isClosed = (t: ITeaser): boolean => {
    return t.access.restrictions.indexOf('closed') >= 0;
};
