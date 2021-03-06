import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { ProjectsComponent }      from './components/projects/projects.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';
import { ProjectInformationComponent }  from './components/projectInformation/project-information.component';

import { ProjectService }  from './services/project.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    DashboardComponent,
    ProjectDetailComponent,
    ProjectInformationComponent
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
