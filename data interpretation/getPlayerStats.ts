import {Match, Participant} from "../types";

const getParticipantData = (match: Match, puuid: string) =>
    match.info.participants
        .filter(participant => participant.puuid === puuid)[0];

const sumPlayerStats = (participant_stats: Participant[]) => {
    let kills = 0;
    let deaths = 0;
    let assists = 0;
    participant_stats.forEach(participant => {
        kills += participant.kills;
        deaths += participant.deaths;
        assists += participant.assists;
    });
    console.log(`kills: ${kills}`);
    console.log(`deaths: ${deaths}`);
    console.log(`assists: ${assists}`);
}


export default sumPlayerStats;