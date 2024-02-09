import {z} from 'zod';
import {matchSchema, participantSchema} from "./schemas";

export type Account = {
    puuid: string,
    gameName: string,
    tagLine: string,
};

export type Match = z.infer<typeof matchSchema>;

export type Participant = z.infer<typeof participantSchema>;