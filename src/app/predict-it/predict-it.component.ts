import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'predict-it',
  templateUrl: './predict-it.component.html',
  styleUrls: ['./predict-it.component.css']
})
export class PredictItComponent implements OnInit {
  gameLines: any = [];
  errorMsg: string;
  constructor(private _tournamentService: TournamentService) { }

  ngOnInit() {
    this._tournamentService.getTournaments()
      .subscribe(data => { 
        this.gameLines = data[0].gameLines; 
      },
      err => { this.errorMsg = err; }
      );
  }
}
