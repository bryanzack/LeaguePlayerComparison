import {Account} from "../types";
import {accountSchema} from "../schemas";

const getPUUID = async (

    region: string,
    game_name: string,
    tag_line: string,

) => {

    const request_url = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${game_name}/${tag_line}?api_key=${process.env.api_key}`;
    return await fetch(request_url)
        .then(response => response.json())
        .then(json => accountSchema.parse(json));

}

export default getPUUID;