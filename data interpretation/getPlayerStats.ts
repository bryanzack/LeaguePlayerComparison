import {Match} from "../types";

const getPlayerStats = (matches: Match[], puuid: string) =>
    matches.map(match => match.info.participants!
        .filter(participant=> participant.puuid === puuid)[0]);

export default getPlayerStats;