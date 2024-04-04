import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { DetailcardComponent } from './detailcard/detailcard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionListComponent, DetailcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101369909-lab-test2-comp3133';
}
