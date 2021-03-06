/**
 * Created by Matthew on 13-01-2017
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";

@Component({
    selector: 'my-project-information',
    templateUrl: './app/components/projectInformation/project-information.component.html'
})

export class ProjectInformationComponent implements OnInit {
    @Input() project: Project;
    newProject = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newProject = true;
                this.project = new Project();
            } else {
                this.newProject = false;
                this.projectService.getProject(id)
                    .then(project => this.project = project);
            }
        });
    }

    save() {
        this.projectService
            .save(this.project)
            .then(project => {
                this.project = project; // saved project, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}
