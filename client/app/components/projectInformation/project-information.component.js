/**
 * Created by Matthew on 13-01-2017
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_1 = require("../../models/project");
var project_service_1 = require("../../services/project.service");
var ProjectInformationComponent = (function () {
    function ProjectInformationComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.newProject = false;
        this.navigated = false; // true if navigated here
    }
    ProjectInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (id === 'new') {
                _this.newProject = true;
                _this.project = new project_1.Project();
            }
            else {
                _this.newProject = false;
                _this.projectService.getProject(id)
                    .then(function (project) { return _this.project = project; });
            }
        });
    };
    ProjectInformationComponent.prototype.save = function () {
        var _this = this;
        this.projectService
            .save(this.project)
            .then(function (project) {
            _this.project = project; // saved project, w/ id if new
            _this.goBack();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    ProjectInformationComponent.prototype.goBack = function () {
        window.history.back();
    };
    return ProjectInformationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], ProjectInformationComponent.prototype, "project", void 0);
ProjectInformationComponent = __decorate([
    core_1.Component({
        selector: 'my-project-information',
        templateUrl: './app/components/projectInformation/project-information.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        router_1.ActivatedRoute])
], ProjectInformationComponent);
exports.ProjectInformationComponent = ProjectInformationComponent;
//# sourceMappingURL=project-information.component.js.map