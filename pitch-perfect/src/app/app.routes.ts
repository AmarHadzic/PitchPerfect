import { Routes } from '@angular/router';
import { LiveScoresComponent } from './live-scores/live-scores.component';
import { LeagueTableComponent } from './league-table/league-table.component';

export const routes: Routes = [
    {path: '', redirectTo: '/live-scores', pathMatch: 'full'},
    {path: 'live-scores', component: LiveScoresComponent},
    {path: 'league-table', component: LeagueTableComponent},
    {path: '**', redirectTo: '/live-scores'}
];
