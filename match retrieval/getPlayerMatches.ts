import 'dotenv/config';
import getMatchIDs from "./getMatchIDs";
import {fetchMatch, fetchWithDelay} from "./extractMatchData";
import {Account, Match} from "../types";
import {matchSchema} from "../schemas";

export async function getPlayerMatches(accounts: Account[], count: number) {

    const match_ids_promises = accounts.map(account =>
        getMatchIDs({
            region: 'americas',
            puuid: account.puuid,
            queue: 420,
            count: count}
        ));

    const id_lists = await Promise.all(match_ids_promises);

    let match_lists: Match[][] = []
    for (const id_list of id_lists) {
        let match_list: Match[] = []
        for (const id of id_list) {
            const match = await fetchMatch(id, 'americas');
            const parsed_match = matchSchema.parse(match);
            match_list.push(parsed_match);
        }
        match_lists.push(match_list);
    }

    return match_lists;

}
export default getPlayerMatches;