import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MissionListComponent } from './mission-list/mission-list.component';
import { DetailcardComponent } from './detailcard/detailcard.component';

@NgModule({
  declarations: [AppComponent, MissionListComponent, DetailcardComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
