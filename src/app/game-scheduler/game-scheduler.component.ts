import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Tournament } from './tournament.ts';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'game-scheduler',
  templateUrl: './game-scheduler.component.html',
  styleUrls: ['./game-scheduler.component.css']
})
export class GameSchedulerComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _tournamentService: TournamentService) { }

  gameCalendarForm: FormGroup;
  public team1: string;
  public team2: string;
  public showSchedule = false;
  public tournament: Tournament;

  ngOnInit() {
    this.gameCalendarForm = this._fb.group({
      tournamentName: ['BTC', Validators.required],
      year: ['2018', Validators.required],
      sport: ['Cricket', Validators.required],
      gameFormat: ['T20', Validators.required],
      numberOfMatches: ['2', Validators.required],
      gameLines: this._fb.array([])
    });
  }

  gameLine(): FormGroup {
    return this._fb.group({
      gameDateTime: ['', Validators.required],
      venue: ['', Validators.required],
      team1: ['', Validators.required],
      team2: ['', Validators.required]
    })
  }

  addGameLines(numberOfMatches) {
    let control = <FormArray>this.gameCalendarForm.controls['gameLines'];
    let addrCtrl;

    for (let i = 0; i < Number(numberOfMatches); i++) {
      addrCtrl = this.gameLine();
      control.push(addrCtrl);
    }
  }

  removeGameLine(lineNumber) {
    let control = <FormArray>this.gameCalendarForm.controls['gameLines'];
    control.removeAt(lineNumber);
  }

  CreateSchedule() {
    this.showSchedule = true;
    this.addGameLines(this.gameCalendarForm.controls.numberOfMatches.value)
  }

  saveSchedule() {
    this.tournament = new Tournament();

    this.tournament.tournamentName = this.gameCalendarForm.controls.tournamentName.value;
    this.tournament.year = this.gameCalendarForm.controls.year.value;
    this.tournament.sport = this.gameCalendarForm.controls.sport.value;
    this.tournament.gameFormat = this.gameCalendarForm.controls.gameFormat.value;
    this.tournament.gameLines = this.gameCalendarForm.controls.gameLines.value;

    this._tournamentService.addTournament(this.tournament)
      .subscribe(
      teamsResponseObj => teamsResponseObj,
      responseErrorData => responseErrorData);
  }

  setTeam1(message: string) {
    this.team1 = message;
  }

  setTeam2(message: string) {
    this.team2 = message;
  }


}
