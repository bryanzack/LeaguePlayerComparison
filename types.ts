import {z} from 'zod';
import {matchSchema, participantSchema} from "./schemas";

export type Account = {
    puuid: string,
    gameName: string,
    tagLine: string,
};

export type Match = z.infer<typeof matchSchema>;

export type Participant = z.infer<typeof participantSchema>;

/*
export interface PlayerStats {
    total_kills: number,
    total_deaths: number,
    total_assists: number,
    avg_kda: number,
}
 */

export class PlayerStats {

    //KDA TOTALS
    total_kills: number;
    total_deaths: number;
    total_assists: number;
    total_kda: number;

    //KDA AVERAGES
    avg_kills: number;
    avg_deaths: number;
    avg_assists: number
    avg_kda: number;

    //JUNGLE STATS
    allied_jungle_monster_kills: number;
    baron_takedowns: number;
    buffs_stolen: number;
    dragon_takedowns: number;
    enemy_jungle_monster_kills: number;
    epic_monster_kills_near_enemy_jungler: number;
    epic_monster_kills_within_30_seconds_of_spawn: number;
    epic_monster_steals: number;
    epic_monsters_stolen_without_smite: number;
    initial_buff_count :number;
    initial_crab_count: number;
    jungle_cs_before_10_minutes: number,
    jungler_takedowns_near_damaged_epic_monster: number;
    lane_minions_first_10_minutes: number;
    more_enemy_jungle_than_opponent: number;
    perfect_dragon_souls_taken: number;
    rift_herald_takedowns: number;
    scuttle_crab_kills: number;
    solo_baron_kills: number;
    team_baron_kills: number;
    team_elder_dragon_kills: number;
    team_rift_herald_kills: number;
    turrets_taken_with_rift_herald: number;
    damage_dealt_to_buildings: number;
    damage_dealt_to_objectives: number;
    damage_dealt_to_turrets: number;
    dragon_kills: number;
    inhibitor_kills: number;
    inhitor_takedowns: number;
    inhibitors_lost: number;
    neutral_minions_killed: number;
    objectives_stolen: number;
    objectives_stolen_assists: number;
    total_ally_jungle_minions_killed: number;
    total_enemy_jungle_minions_killed: number;
    total_minions_killed: number;
    turret_kills: number;
    turret_takedowns: number;
    turrets_lost: number;


    constructor() {

        this.total_kills = 0;
        this.total_deaths = 0;
        this.total_assists = 0;
        this.total_kda = 0;
        this.avg_kills = 0;
        this.avg_deaths = 0;
        this.avg_assists = 0;
        this.avg_kda = 0;


        this.allied_jungle_monster_kills = 0;
        this.baron_takedowns = 0;
        this.buffs_stolen=0;
        this.dragon_takedowns=0;
        this.enemy_jungle_monster_kills=0;
        this.epic_monster_kills_near_enemy_jungler=0;
        this.epic_monster_kills_within_30_seconds_of_spawn=0;
        this.epic_monster_steals=0;
        this.epic_monsters_stolen_without_smite=0;
        this.initial_buff_count=0;
        this.initial_crab_count=0;
        this.jungle_cs_before_10_minutes=0;
        this.jungler_takedowns_near_damaged_epic_monster=0;
        this.lane_minions_first_10_minutes=0;
        this.more_enemy_jungle_than_opponent=0;
        this.perfect_dragon_souls_taken=0;
        this.rift_herald_takedowns=0;
        this.scuttle_crab_kills=0;
        this.solo_baron_kills=0;
        this.team_baron_kills=0;
        this.team_elder_dragon_kills=0;
        this.team_rift_herald_kills=0;
        this.turrets_taken_with_rift_herald=0;
        this.damage_dealt_to_buildings=0;
        this.damage_dealt_to_objectives=0;
        this.damage_dealt_to_turrets=0;
        this.dragon_kills=0;
        this.inhibitor_kills=0;
        this.inhitor_takedowns=0;
        this.inhibitors_lost=0;
        this.neutral_minions_killed=0;
        this.objectives_stolen=0;
        this.objectives_stolen_assists=0;
        this.total_ally_jungle_minions_killed=0;
        this.total_enemy_jungle_minions_killed=0;
        this.total_minions_killed=0;
        this.turret_kills=0;
        this.turret_takedowns=0;
        this.turrets_lost=0;
    }

    populateSums(player_games: Participant[]): void {
        player_games.forEach((game, i) => {
            this.total_kills += game.kills!;
            this.total_deaths += game.deaths!;
            this.total_assists += game.assists!;
            this.total_kda += game.challenges?.kda!;
            this.allied_jungle_monster_kills += game.challenges?.alliedJungleMonsterKills!;
            this.baron_takedowns += game.challenges?.baronTakedowns!;
            this.buffs_stolen += game.challenges?.buffsStolen!;
            this.dragon_takedowns += game.challenges?.dragonTakedowns!;
            this.enemy_jungle_monster_kills += game.challenges?.enemyJungleMonsterKills!;
            this.epic_monster_kills_near_enemy_jungler += game.challenges?.epicMonsterKillsNearEnemyJungler!;
            this.epic_monster_kills_within_30_seconds_of_spawn += game.challenges?.epicMonsterKillsWithin30SecondsOfSpawn!;
            this.epic_monster_steals += game.challenges?.epicMonsterSteals!;
        })
    }
}