import { Component, OnChanges, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IplteamService } from '../../services/ipl-team.service';

@Component({
  selector: 'ipl-team-dropdown',
  templateUrl: './iplTeam-dropdown.component.html',
  styleUrls: ['./iplTeam-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IplTeamDropdownComponent),
      multi: true
    }
  ]
})
export class IplTeamDropdownComponent implements OnInit, ControlValueAccessor {
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();
  teams: any = [];
  selectedTeam = 'Select team';
  errorMsg: string;
  constructor(private _iplTeamService: IplteamService) { }
  ngOnInit() {
    this._iplTeamService.getTeams()
      .subscribe(
      teamsResponseObj => { this.teams = teamsResponseObj; },
      responseErrorData => { this.errorMsg = responseErrorData; }
      );
  }

  writeValue(value: any) {}
  propagateChange = (_: any) => { };
  registerOnTouched() { }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  setTeam(userSelection: string) {
    this.selectedTeam = userSelection;
    this.itemSelected.emit(this.selectedTeam);
    this.propagateChange(this.selectedTeam);
  }

}
