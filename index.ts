import getPlayerMatches from "./match retrieval/getPlayerMatches";
import {Account} from "./types";
import getPUUID from "./match retrieval/getAccount";
import * as fs from 'fs';

const names = [
    'guns or bust#00000',
    'mrknutz#0420'
];

async function main() {
    const account_promises: Promise<Account>[] = names.map(name =>
        getPUUID('americas', name.split('#')[0], name.split('#')[1]));

    const accounts = await Promise.all(account_promises);

    const matches = await getPlayerMatches(accounts);

    var json = JSON.stringify(matches);
    fs.writeFile('matches.json', json, 'utf8', () => console.log('done'));
    //TODO: add terminal progess updates that show what player is being retrieved along with what match out of 100, also show if rate limit was hit
    //TODO: fix rate limiting somehow.
}

if (require.main === module) {
    main();
}
