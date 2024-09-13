import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { MatchStatsComponent } from './components/match-stats/match-stats.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { PlayerAttendanceComponent } from './components/player-attendance/player-attendance.component';
import { PlayerPerformanceComponent } from './components/player-performance/player-performance.component';

import { NgChartsModule } from 'ng2-charts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    MatchStatsComponent,
    PlayerProfileComponent,
    PlayerAttendanceComponent,
    PlayerPerformanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
