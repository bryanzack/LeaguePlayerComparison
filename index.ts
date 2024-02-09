import getPlayerMatches from "./match retrieval/getPlayerMatches";
import {Account} from "./types";
import getPUUID from "./match retrieval/getAccount";
import * as fs from 'fs';
import getPlayerStats from "./data interpretation/getPlayerStats";

const names = [
    'guns or bust#00000',
    'mrknutz#0420'
];

const count = 10;

async function main() {
    const account_promises: Promise<Account>[] = names.map(name =>
        getPUUID('americas', name.split('#')[0], name.split('#')[1]));

    const accounts = await Promise.all(account_promises);

    const total_matches = await getPlayerMatches(accounts, count);

    var json = JSON.stringify(total_matches);
    let stats = total_matches.map((match_list, i) => getPlayerStats(match_list, accounts[i].puuid));
    fs.writeFile('matches.json', json, 'utf8', () => console.log('done'));
    fs.writeFile('playerstats.json', JSON.stringify(stats), 'utf8', () => console.log('stats gotten'));
}

if (require.main === module) {
    main();
}
