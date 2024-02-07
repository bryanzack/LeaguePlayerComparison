import 'dotenv/config';
import getPUUID from "./getAccount";
import getMatches from "./getMatches";
import extractMatchData from "./extractMatchData";
import {Account, Match, MatchList} from "../types";

export async function getPlayerMatches(accounts: Account[]) {

    const match_ids_promises: Promise<MatchList>[] = accounts.map(account => {
        return getMatches({region: 'americas', puuid: account.puuid, queue: 420})
    });
    const match_ids = await Promise.all(match_ids_promises);

    const matches_promises: Promise<Match[]>[] = match_ids.map(match => {
        return extractMatchData(match);
    })

    return await Promise.all(matches_promises);
}
export default getPlayerMatches;