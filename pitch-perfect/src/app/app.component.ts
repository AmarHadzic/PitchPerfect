import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveScoresComponent } from './live-scores/live-scores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LiveScoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
