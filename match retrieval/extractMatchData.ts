import {Match, MatchList} from "../types";

const fetchMatch = async (match_id: string, region: string): Promise<Match> => {
    const request_url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${match_id}?api_key=${process.env.API_KEY}`
    return await fetch(request_url)
        .then(response => response.json());
}

const extractMatchData = async (matches: MatchList): Promise<Match[]> => {
    let match_list: Match[] = [];
    for (let match_id in matches) {
        await fetchMatch(matches[match_id], 'americas')
            .then(match_json => match_list.push(match_json))
    }
    return match_list;
}

export default extractMatchData;