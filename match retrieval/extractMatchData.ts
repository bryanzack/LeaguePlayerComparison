export const fetchMatch = (match_id: string, region: string) => {
    const request_url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${match_id}?api_key=${process.env.API_KEY}`
    return fetch(request_url)
        .then(res => res.json())
}

export const fetchWithDelay = (match_id: string, region: string, delay: number) => {
    const request_url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${match_id}?api_key=${process.env.API_KEY}`
        const response = fetch(request_url).then(async (response) => {
            await new Promise(resolve => setTimeout(resolve, delay));
            console.log(`code ${response.status}`);
            return response.json();
        });
    return response;
}


