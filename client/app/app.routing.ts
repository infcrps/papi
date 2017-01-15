import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProjectsComponent }      from './components/projects/projects.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';
import { ProjectInformationComponent }  from './components/projectInformation/project-information.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'detail/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'info/:id',
    component: ProjectInformationComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
