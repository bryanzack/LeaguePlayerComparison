import {z} from 'zod';

const getMatchIDs = async (
    info: {
        region: string,
        puuid: string,
        startTime?: number,
        endTime?: number,
        queue?: number,
        type?: string,
        start?: number,
        count: number,
    }
)     => {

    const {
        region,
        puuid,
        queue,
        start,
        count,
    } = info;

    const request_url= `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?queue=${queue}&start=0&count=${count}&api_key=${process.env.api_key}`;

    return await fetch(request_url)
        .then(response => response.json()
            .then((json) => {
                console.log(json);
                return z.array(z.string()).parse(json);
            }));
}

export default getMatchIDs;