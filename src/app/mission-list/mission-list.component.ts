import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { mission } from '../models/mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: mission[] = [];
  selectedLaunch: mission | undefined;

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.AppService.getLaunches().subscribe((launches: mission[]) => {
      this.launches = launches;
    });
  }

  selectLaunch(launch: mission): void {
    this.selectedLaunch = launch;
  }
}
