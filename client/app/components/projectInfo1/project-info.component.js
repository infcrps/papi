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
/**
 * Created by Matthew on 10-01-2017
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_service_1 = require("../../services/project.service");
var ProjectInfoComponent = (function () {
    function ProjectInfoComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    ProjectInfoComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectInfoComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectInfoComponent.prototype.onSelect = function (project) { this.selectedProject = project; };
    ProjectInfoComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedProject._id]);
    };
    ProjectInfoComponent.prototype.addProject = function () {
        this.selectedProject = null;
        this.router.navigate(['/detail', 'new']);
    };
    ProjectInfoComponent.prototype.deleteProject = function (project, event) {
        var _this = this;
        event.stopPropagation();
        this.projectService
            .delete(project)
            .then(function (res) {
            _this.projects = _this.projects.filter(function (h) { return h !== project; });
            if (_this.selectedProject === project) {
                _this.selectedProject = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return ProjectInfoComponent;
}());
ProjectInfoComponent = __decorate([
    core_1.Component({
        selector: 'my-projects',
        templateUrl: './app/components/projects/projects.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        project_service_1.ProjectService])
], ProjectInfoComponent);
exports.ProjectInfoComponent = ProjectInfoComponent;
//# sourceMappingURL=project-info.component.js.map