export class Tournament {
    _id: string;
    tournamentName: string;
    year: string;
    category: string;
    teams: [{
        code: String,
        teamName: String
    }];

}
