import { Routes } from '@angular/router';
import { GameSchedulerComponent } from '.././game-scheduler/game-scheduler.component';
import { PredictionRulesComponent } from '.././prediction-rules/prediction-rules.component';
import { AddTeamComponent } from 'app/add-team/add-team.component';
import { PredictItComponent} from '../predict-it/predict-it.component';

export const appRoutes: Routes = [
    { path: '', component: GameSchedulerComponent },
    { path:'game-scheduler', component: GameSchedulerComponent},
    { path:'prediction-rules', component: PredictionRulesComponent},
    { path: 'add-team', component: AddTeamComponent},
    { path: 'predict-it', component: PredictItComponent}
];
