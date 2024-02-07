export type Account = {
    puuid: string,
    gameName: string,
    tagLine: string,
};

export type MatchList = string[];

export type PlayerStats = {
    avgKDA: number,
    avgDamage: number,
    avgBaronKills: number,
    avgBuildingDamage: number,
    avgObjectiveDamage: number,
    avgTurretDamage: number,
    avgSelfMitigated: number,
    avgPlacedPinkWards: number,
    avgDoubleKills: number,
    avgDragonKills: number,
    avgGoldEarned: number,
    avgGoldSpent: number,
    avgInhibKills: number,
    avgInhibTakedowns: number,
    avgInhibsLost: number,
    avgItemsPurchased: number,
    avgKillingSprees: number,
    avgLargestCritStrike: number,
    avgLargestKillingSpree: number,
    avgLargestMultiKill: number,
    avgLongestTimeSpentLiving: number,
    avgMagicDamageDealt: number,
    avgMagicDamageDealtToChampions: number,
    avgMagicDamageTaken: number,
    avgNeutralMinionsKilled: number,
    avgObjectivesStolen: number,
    avgObjectiveStolenAssists: number,
    avgPentaKills: number,
    avgPhysicalDamageDealt: number,
    avgPhysicalDamageDealtToChampions: number,
    avgQuadraKills: number,
    avgSightWardsBoughtInGame: number,
    avgSpell1Casts: number,
    avgSpell2Casts: number,
    avgSpell3Casts: number,
    avgSpell4Casts: number,
    avgTimeCCingOthers: number,
    avgTimePlayed: number,
    avgTotalDamageDealt: number,
    avgTotalDamageDealtToChampions: number,
    avgTotalDamageShieldedOnTeammates: number,
    avgTotalDamageTaken: number,
    avgTotalHeal: number,
    avgTotalHealOnTeammates: number,
    avgTotalMinionsKilled: number,
    avgTotalTimeCCDealt: number,
    avgTotalTimeSpentDead: number,
    avgTotalUnitsHealed: number,
    avgTripleKills: number,
    avgTrueDamageDealt: number,
    avgTrueDamageDealtToChampions: number,
    avgTrueDamageTaken: number,
    avgTurretKills: number,
    avgTurretTakedowns: number,
    avgTurretsLost: number,
    avgUnrealKills: number,
    avgVisionScore: number,
    avgVisionWardsBoughtInGame: number,
    avgWardsKilled: number,
    avgWardsPlaced: number,
}




export interface Match {
    metadata: Metadata;
    info:     Info;
}

export interface Info {
    gameCreation:       number;
    gameDuration:       number;
    gameEndTimestamp:   number;
    gameId:             number;
    gameMode:           string;
    gameName:           string;
    gameStartTimestamp: number;
    gameType:           string;
    gameVersion:        string;
    mapId:              number;
    participants:       Participant[];
    platformId:         PlatformID;
    queueId:            number;
    teams:              Team[];
    tournamentCode:     string;
}

export interface Participant {
    allInPings:                     number;
    assistMePings:                  number;
    assists:                        number;
    baitPings:                      number;
    baronKills:                     number;
    basicPings:                     number;
    bountyLevel:                    number;
    challenges:                     { [key: string]: number };
    champExperience:                number;
    champLevel:                     number;
    championId:                     number;
    championName:                   string;
    championTransform:              number;
    commandPings:                   number;
    consumablesPurchased:           number;
    damageDealtToBuildings:         number;
    damageDealtToObjectives:        number;
    damageDealtToTurrets:           number;
    damageSelfMitigated:            number;
    dangerPings:                    number;
    deaths:                         number;
    detectorWardsPlaced:            number;
    doubleKills:                    number;
    dragonKills:                    number;
    eligibleForProgression:         boolean;
    enemyMissingPings:              number;
    enemyVisionPings:               number;
    firstBloodAssist:               boolean;
    firstBloodKill:                 boolean;
    firstTowerAssist:               boolean;
    firstTowerKill:                 boolean;
    gameEndedInEarlySurrender:      boolean;
    gameEndedInSurrender:           boolean;
    getBackPings:                   number;
    goldEarned:                     number;
    goldSpent:                      number;
    holdPings:                      number;
    individualPosition:             string;
    inhibitorKills:                 number;
    inhibitorTakedowns:             number;
    inhibitorsLost:                 number;
    item0:                          number;
    item1:                          number;
    item2:                          number;
    item3:                          number;
    item4:                          number;
    item5:                          number;
    item6:                          number;
    itemsPurchased:                 number;
    killingSprees:                  number;
    kills:                          number;
    lane:                           string;
    largestCriticalStrike:          number;
    largestKillingSpree:            number;
    largestMultiKill:               number;
    longestTimeSpentLiving:         number;
    magicDamageDealt:               number;
    magicDamageDealtToChampions:    number;
    magicDamageTaken:               number;
    missions:                       { [key: string]: number };
    needVisionPings:                number;
    neutralMinionsKilled:           number;
    nexusKills:                     number;
    nexusLost:                      number;
    nexusTakedowns:                 number;
    objectivesStolen:               number;
    objectivesStolenAssists:        number;
    onMyWayPings:                   number;
    participantId:                  number;
    pentaKills:                     number;
    perks:                          Perks;
    physicalDamageDealt:            number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken:            number;
    placement:                      number;
    playerAugment1:                 number;
    playerAugment2:                 number;
    playerAugment3:                 number;
    playerAugment4:                 number;
    playerScore0:                   number;
    playerScore1:                   number;
    playerScore10:                  number;
    playerScore11:                  number;
    playerScore2:                   number;
    playerScore3:                   number;
    playerScore4:                   number;
    playerScore5:                   number;
    playerScore6:                   number;
    playerScore7:                   number;
    playerScore8:                   number;
    playerScore9:                   number;
    playerSubteamId:                number;
    profileIcon:                    number;
    pushPings:                      number;
    puuid:                          string;
    quadraKills:                    number;
    riotIdGameName:                 string;
    riotIdTagline:                  PlatformID;
    role:                           string;
    sightWardsBoughtInGame:         number;
    spell1Casts:                    number;
    spell2Casts:                    number;
    spell3Casts:                    number;
    spell4Casts:                    number;
    subteamPlacement:               number;
    summoner1Casts:                 number;
    summoner1Id:                    number;
    summoner2Casts:                 number;
    summoner2Id:                    number;
    summonerId:                     string;
    summonerLevel:                  number;
    summonerName:                   string;
    teamEarlySurrendered:           boolean;
    teamId:                         number;
    teamPosition:                   string;
    timeCCingOthers:                number;
    timePlayed:                     number;
    totalAllyJungleMinionsKilled:   number;
    totalDamageDealt:               number;
    totalDamageDealtToChampions:    number;
    totalDamageShieldedOnTeammates: number;
    totalDamageTaken:               number;
    totalEnemyJungleMinionsKilled:  number;
    totalHeal:                      number;
    totalHealsOnTeammates:          number;
    totalMinionsKilled:             number;
    totalTimeCCDealt:               number;
    totalTimeSpentDead:             number;
    totalUnitsHealed:               number;
    tripleKills:                    number;
    trueDamageDealt:                number;
    trueDamageDealtToChampions:     number;
    trueDamageTaken:                number;
    turretKills:                    number;
    turretTakedowns:                number;
    turretsLost:                    number;
    unrealKills:                    number;
    visionClearedPings:             number;
    visionScore:                    number;
    visionWardsBoughtInGame:        number;
    wardsKilled:                    number;
    wardsPlaced:                    number;
    win:                            boolean;
}

export interface Perks {
    statPerks: StatPerks;
    styles:    Style[];
}

export interface StatPerks {
    defense: number;
    flex:    number;
    offense: number;
}

export interface Style {
    description: Description;
    selections:  Selection[];
    style:       number;
}

export enum Description {
    PrimaryStyle = "primaryStyle",
    SubStyle = "subStyle",
}

export interface Selection {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}

export enum PlatformID {
    Boba2 = "boba2",
    Na1 = "NA1",
    The00000 = "00000",
}

export interface Team {
    bans:       Ban[];
    objectives: Objectives;
    teamId:     number;
    win:        boolean;
}

export interface Ban {
    championId: number;
    pickTurn:   number;
}

export interface Objectives {
    baron:      Baron;
    champion:   Baron;
    dragon:     Baron;
    horde:      Baron;
    inhibitor:  Baron;
    riftHerald: Baron;
    tower:      Baron;
}

export interface Baron {
    first: boolean;
    kills: number;
}

export interface Metadata {
    dataVersion:  string;
    matchId:      string;
    participants: string[];
}
