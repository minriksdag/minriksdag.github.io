import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RiksdagComponent } from './riksdag/riksdag.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompareComponent } from './compare/compare.component';
import { ChartTestsComponent } from './chart-tests/chart-tests.component';
import { FormsModule } from '@angular/forms';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { MembersComponent } from './members/members.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'riksdag', component: RiksdagComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'charts', component: ChartTestsComponent},
  { path: 'members', component: MembersComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RiksdagComponent,
    HomeComponent,
    PageNotFoundComponent,
    CompareComponent,
    ChartTestsComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    ChartsModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatRippleModule,
    MatListModule, MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
