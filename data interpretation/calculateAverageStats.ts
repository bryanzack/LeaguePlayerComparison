import {z} from 'zod';
import {Participant, PlayerStats} from "../types";
import {participantSchema} from "../schemas";

export const sumChallenges = (player_games: Participant[]) => {
    const player_stats = new PlayerStats();

    // Sum values
    player_games.forEach((game, i) => {
        player_stats.total_kills += game.kills!;
        player_stats.total_deaths += game.deaths!;
        player_stats.total_assists += game.assists!;
        player_stats.total_kda += game.challenges?.kda!
    });

    // Average values
    player_stats.avg_kills = player_stats.total_kills/player_games.length;
    player_stats.avg_deaths = player_stats.total_deaths/player_games.length;
    player_stats.avg_assists = player_stats.total_assists/player_games.length;
    player_stats.avg_kda = player_stats.total_kda/player_games.length

    return player_stats;
}

export const sumPlayerStats = (player_games: Participant[]) => {
    let challenges_sum = {};
    player_games.forEach((game, i) => {
            Object
                .keys(game)
                .forEach(stat => {
                    // @ts-ignore
                    challenges_sum[stat] = (challenges_sum[stat] || 0) + game[stat];
                })

    })
    return challenges_sum;
    /*
    const summed_obj: Participant = {}
    player_games.forEach((game, i) => {
        Object
            .keys(game)
            .forEach(stat => {
                // @ts-ignore
                summed_obj[stat] = (summed_obj[stat] || 0) + game[stat];
            })
    })
    return summed_obj;

     */
}

const calculateAverageStats = (total_stats:  Participant[][]) => {
        const summed_object: Participant[][] = [];
        const averaged_object: Participant[][] = [];

        total_stats.forEach((player, i)=> player
            .forEach((participant, j)=> {
                Object
                    .keys(participant)
                    .forEach(stat => {
                        // @ts-ignore
                        console.log(`${stat}: ${participant[stat]}`);
                        //summed_object[i][j][stat] = (summed_object[i][j][stat] || 0) + participant[stat]
                    });
            }));

    return summed_object;
}
export default calculateAverageStats;