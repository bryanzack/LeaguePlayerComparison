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
    kills: number[];
    deaths: number[];
    assists: number[];
    kda: number[];

    //KDA AVERAGES
    avg_kills: number;
    avg_deaths: number;
    avg_assists: number
    avg_kda: number;

    //JUNGLE STATS
    allied_jungle_monster_kills: number[];
    baron_takedowns: number[];
    buffs_stolen: number[];
    dragon_takedowns: number[];
    enemy_jungle_monster_kills: number[];
    epic_monster_kills_near_enemy_jungler: number[];
    epic_monster_kills_within_30_seconds_of_spawn: number[];
    epic_monster_steals: number[];
    epic_monsters_stolen_without_smite: number[];
    initial_buff_count :number[];
    initial_crab_count: number[];
    jungle_cs_before_10_minutes: number[];
    jungler_takedowns_near_damaged_epic_monster: number[];
    lane_minions_first_10_minutes: number[];
    more_enemy_jungle_than_opponent: number[];
    perfect_dragon_souls_taken: number[];
    rift_herald_takedowns: number[];
    scuttle_crab_kills: number[];
    solo_baron_kills: number[];
    team_baron_kills: number[];
    team_elder_dragon_kills: number[];
    team_rift_herald_kills: number[];
    turrets_taken_with_rift_herald: number[];
    damage_dealt_to_buildings: number[];
    damage_dealt_to_objectives: number[];
    damage_dealt_to_turrets: number[];
    dragon_kills: number[];
    inhibitor_kills: number[];
    inhibitor_takedowns: number[];
    inhibitors_lost: number[];
    neutral_minions_killed: number[];
    objectives_stolen: number[];
    objectives_stolen_assists: number[];
    total_ally_jungle_minions_killed: number[];
    total_enemy_jungle_minions_killed: number[];
    total_minions_killed: number[];
    turret_kills: number[];
    turret_takedowns: number[];
    turrets_lost: number[];


    constructor() {

        this.avg_kills = 0;
        this.avg_deaths = 0;
        this.avg_assists = 0;
        this.avg_kda = 0;

        this.kills = [];
        this.deaths = [];
        this.assists = [];
        this.kda = [];
        this.allied_jungle_monster_kills = [];
        this.baron_takedowns = [];
        this.buffs_stolen = [];
        this.dragon_takedowns = [];
        this.enemy_jungle_monster_kills = [];
        this.epic_monster_kills_near_enemy_jungler = [];
        this.epic_monster_kills_within_30_seconds_of_spawn = [];
        this.epic_monster_steals = [];
        this.epic_monsters_stolen_without_smite = [];
        this.initial_buff_count = [];
        this.initial_crab_count = [];
        this.jungle_cs_before_10_minutes = [];
        this.jungler_takedowns_near_damaged_epic_monster = [];
        this.lane_minions_first_10_minutes = [];
        this.more_enemy_jungle_than_opponent = [];
        this.perfect_dragon_souls_taken = [];
        this.rift_herald_takedowns = [];
        this.scuttle_crab_kills = [];
        this.solo_baron_kills = [];
        this.team_baron_kills = [];
        this.team_elder_dragon_kills = [];
        this.team_rift_herald_kills = [];
        this.turrets_taken_with_rift_herald = [];
        this.damage_dealt_to_buildings = [];
        this.damage_dealt_to_objectives = [];
        this.damage_dealt_to_turrets = [];
        this.dragon_kills = [];
        this.inhibitor_kills = [];
        this.inhibitor_takedowns = [];
        this.inhibitors_lost = [];
        this.neutral_minions_killed = [];
        this.objectives_stolen = [];
        this.objectives_stolen_assists = [];
        this.total_ally_jungle_minions_killed = [];
        this.total_enemy_jungle_minions_killed = [];
        this.total_minions_killed = [];
        this.turret_kills = [];
        this.turret_takedowns = [];
        this.turrets_lost = [];
    }

    populateSums(player_games: Participant[]): void {
        player_games.forEach((game) => {
            this.kills.push(game.kills!);
            this.deaths.push(game.deaths!);
            this.assists.push(game.assists!);
            this.kda.push(game.challenges?.kda!);

            this.allied_jungle_monster_kills.push(game.challenges?.alliedJungleMonsterKills!);
            this.baron_takedowns.push(game.challenges?.baronTakedowns!);
            this.buffs_stolen.push(game.challenges?.buffsStolen!);
            this.dragon_takedowns.push(game.challenges?.dragonTakedowns!);
            this.enemy_jungle_monster_kills.push(game.challenges?.enemyJungleMonsterKills!);
            this.epic_monster_kills_near_enemy_jungler.push(game.challenges?.epicMonsterKillsNearEnemyJungler!);
            this.epic_monster_kills_within_30_seconds_of_spawn.push(game.challenges?.epicMonsterKillsWithin30SecondsOfSpawn!);
            this.epic_monster_steals.push(game.challenges?.epicMonsterSteals!);
            this.epic_monsters_stolen_without_smite.push(game.challenges?.epicMonsterStolenWithoutSmite!);
            this.initial_buff_count.push(game.challenges?.initialBuffCount!);
            this.initial_buff_count.push(game.challenges?.initialCrabCount!);
            this.jungle_cs_before_10_minutes.push(game.challenges?.jungleCsBefore10Minutes!);
            this.lane_minions_first_10_minutes.push(game.challenges?.laneMinionsFirst10Minutes!);
            this.more_enemy_jungle_than_opponent.push(game.challenges?.moreEnemyJungleThanOpponent!);
            this.perfect_dragon_souls_taken.push(game.challenges?.perfectDragonSoulsTaken!);
            this.rift_herald_takedowns.push(game.challenges?.riftHeraldTakedowns!);
            this.scuttle_crab_kills.push(game.challenges?.scuttleCrabKills!);
            this.solo_baron_kills.push(game.challenges?.soloBaronKills!);
            this.team_baron_kills.push(game.challenges?.teamBaronKills!);
            this.team_elder_dragon_kills.push(game.challenges?.teamElderDragonKills!);
            this.team_rift_herald_kills.push(game.challenges?.teamRiftHeraldKills!);
            this.turrets_taken_with_rift_herald.push(game.challenges?.turretsTakenWithRiftHerald!);
            this.damage_dealt_to_buildings.push(game.damageDealtToBuildings!);
            this.damage_dealt_to_objectives.push(game.damageDealtToObjectives!);
            this.damage_dealt_to_turrets.push(game.damageDealtToTurrets!);
            this.dragon_kills.push(game.dragonKills!);
            this.inhibitor_takedowns.push(game.inhibitorTakedowns!);
            this.inhibitor_kills.push(game.inhibitorKills!);
            this.inhibitors_lost.push(game.inhibitorsLost!);
            this.neutral_minions_killed.push(game.neutralMinionsKilled!);
            this.objectives_stolen.push(game.objectivesStolen!);
            this.objectives_stolen_assists.push(game.objectivesStolenAssists!);
            this.total_ally_jungle_minions_killed.push(game.totalAllyJungleMinionsKilled!);
            this.total_enemy_jungle_minions_killed.push(game.totalEnemyJungleMinionsKilled!);
            this.total_minions_killed.push(game.totalMinionsKilled!);
            this.turret_kills.push(game.turretKills!);
            this.turret_takedowns.push(game.turretTakedowns!);
            this.turrets_lost.push(game.turretsLost!);
        });
    }
}