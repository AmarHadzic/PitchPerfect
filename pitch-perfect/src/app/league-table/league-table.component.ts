import { Component, OnInit } from '@angular/core';
import { LeagueApiServiceService } from '../league-api-service.service';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-league-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss'] 
})
export class LeagueTableComponent implements OnInit {

  message: string | undefined;

  constructor(private league_service: LeagueApiServiceService) {}

  ngOnInit(): void {
    this.league_service.get_message("hello from adem").subscribe((data) => {
      this.message = data;
    });
  }
}
