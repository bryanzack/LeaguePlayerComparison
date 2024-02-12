import {z} from 'zod';
import {Participant} from "../types";
import {participantSchema} from "../schemas";

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