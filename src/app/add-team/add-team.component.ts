import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Team } from './team';
import { Tournament } from './tournament';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm: FormGroup;
  name: string;
  code: string;
  team: Team;
  errorMsg: string;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.addTeamForm = this._fb.group({
      tournamentName: ['', Validators.required],
      year: ['', Validators.required],
      category: ['', Validators.required],
      code: ['', Validators.required],
      teamName: ['', Validators.required],
    });

  }

  saveSchedule() {
    this.team = new Team();
    this.team.code = this.addTeamForm.controls.code.value;
    this.team.name = this.addTeamForm.controls.name.value;
  }
}
