// const API_KEY="209e27de-d874-4163-955a-864f9f9cb442"
export const getMatches = () => {
    const url = "https://api.cricapi.com/v1/matches?apikey=209e27de-d874-4163-955a-864f9f9cb442&offset=0";

    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log("Error: ",error))
};