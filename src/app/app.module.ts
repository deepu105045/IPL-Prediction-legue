import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FrameworkModule } from '../framework/framework.module';

import { IplteamService } from './services/ipl-team.service';
import { TournamentService } from './services/tournament.service';
import { appRoutes } from './routing/app.routing';

import { AppComponent } from './app.component';
import { GameSchedulerComponent } from './game-scheduler/game-scheduler.component';
import { IplTeamDropdownComponent } from './shared/iplTeam-dropdown/iplTeam-dropdown.component';
import { PredictionRulesComponent } from './prediction-rules/prediction-rules.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { PredictItComponent } from './predict-it/predict-it.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSchedulerComponent,
    IplTeamDropdownComponent,
    PredictionRulesComponent,
    AddTeamComponent,
    PredictItComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FrameworkModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ IplteamService, TournamentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
