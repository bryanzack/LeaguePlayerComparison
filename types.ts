import {z} from 'zod';
import {matchSchema, participantSchema} from "./schemas";

export type Account = {
    puuid: string,
    gameName: string,
    tagLine: string,
};

export type Match = z.infer<typeof matchSchema>;

export type Participant = {
    [key: number]: z.infer<typeof participantSchema>
};
export const ParticipantRecord = z.record(participantSchema);