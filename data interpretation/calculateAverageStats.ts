import {z} from 'zod';
import {Participant, PlayerStats} from "../types";
import {participantSchema} from "../schemas";

export const getPlayerStats = (player_games: Participant[]) => {
    let player_stats = new PlayerStats();
    player_stats.populateSums(player_games);
    return player_stats;
}

export default getPlayerStats;