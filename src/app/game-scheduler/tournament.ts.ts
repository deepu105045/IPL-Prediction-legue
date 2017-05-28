export class gameLine {
    gameDateTime: Date;
    venue: string;
    competingTeams: {
        team1: string;
        team2: string;
    }

}
export class Tournament {
    tournamentName: string;
    year: string;
    sport: string;
    gameFormat: string;
    numberOfMatches: number;
    gameLines: gameLine[];
}   
