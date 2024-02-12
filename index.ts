import getPlayerMatches from "./match retrieval/getPlayerMatches";
import {Account} from "./types";
import getPUUID from "./match retrieval/getAccount";
import * as fs from 'fs';
import getPlayerStats from "./data interpretation/getPlayerStats";
import calculateAverageStats, {sumPlayerStats} from "./data interpretation/calculateAverageStats";

const names = [
    'guns or bust#00000',
    'mrknutz#0420'
];

const count = 10;

async function main() {

    // collect promises for batch request
    const account_promises: Promise<Account>[] = names.map(name =>
        getPUUID('americas', name.split('#')[0], name.split('#')[1]));

    // get list of player Accounts
    const accounts = await Promise.all(account_promises);

    // for each player, retrieve their last X amount of matches
    const total_matches = await getPlayerMatches(accounts, count);

    // for each player, an array of Participant data from their last X matches is returned
    const total_stats = total_matches.map((match_list, i) => getPlayerStats(match_list, accounts[i].puuid));

    const average_stats = sumPlayerStats(total_stats[0]);


    var json = JSON.stringify(total_matches);
    fs.writeFile('matches.json', json, 'utf8', () => console.log('done'));
    fs.writeFile('playerstats.json', JSON.stringify(total_stats), 'utf8', () => console.log('stats gotten'));
    fs.writeFile('averages.json', JSON.stringify(average_stats), 'utf8', () => console.log('averages collected'));
}

if (require.main === module) {
    main();
}
