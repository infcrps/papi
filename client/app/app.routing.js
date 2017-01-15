"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var projects_component_1 = require("./components/projects/projects.component");
var project_detail_component_1 = require("./components/projectDetail/project-detail.component");
var project_information_component_1 = require("./components/projectInformation/project-information.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'detail/:id',
        component: project_detail_component_1.ProjectDetailComponent
    },
    {
        path: 'info/:id',
        component: project_information_component_1.ProjectInformationComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map