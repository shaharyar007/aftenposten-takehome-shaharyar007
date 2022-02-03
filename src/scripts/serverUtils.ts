/**
 * Function that fetches data from given URL
 * @param {string} url - data endpoint URL
 * @returns {any} data 
 */
export const fetchJson = async (url: string) => {
    const response = await fetch(url);
    return response.json();
};