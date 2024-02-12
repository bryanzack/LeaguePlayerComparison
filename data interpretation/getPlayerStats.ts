import {Match, PlayerStats} from "../types";

const getPlayerStats = (matches: Match[], puuid: string) => {
    const player_games = matches.map(match => match.info.participants!
        .filter(participant=> participant.puuid === puuid)[0]);
    const stats = new PlayerStats();
    stats.populateSums(player_games);
    return stats
}

export default getPlayerStats;