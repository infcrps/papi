/**
 * Created by Matthew on 10-01-2017
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project";

@Component({
    selector: 'my-projects',
    templateUrl: './app/components/projects/projects.component.html'
})

export class ProjectsComponent implements OnInit {

    projects: Project[];
    selectedProject: Project;
    error: any;

    constructor(
        private router: Router,
        private projectService: ProjectService) { }
    getProjects() {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }
    ngOnInit() {
        this.getProjects();
    }
    onSelect(project: Project) { this.selectedProject = project; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedProject._id]);
    }

    addProject() {
        this.selectedProject = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteProject(project: Project, event: any) {
        event.stopPropagation();
        this.projectService
            .delete(project)
            .then(res => {
                this.projects = this.projects.filter(h => h !== project);
                if (this.selectedProject === project) { this.selectedProject = null; }
            })
            .catch(error => this.error = error);
    }
}
