import {z} from 'zod';
import {matchSchema} from "./schemas";

export type Account = {
    puuid: string,
    gameName: string,
    tagLine: string,
};

export type Match = z.infer<typeof matchSchema>;