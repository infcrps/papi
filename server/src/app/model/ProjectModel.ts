/**
 * Created by Matthew on 10-01-2017
 */

import IProjectModel = require('./interfaces/ProjectModel');

class ProjectModel {

    private _projectModel: IProjectModel;

    constructor(projectModel: IProjectModel) {
        this._projectModel = projectModel;
    }
    get name (): string {
        return this._projectModel.name;
    }

    get priority (): string {
        return this._projectModel.priority;
    }

    get category (): string {
        return this._projectModel.category;
    }

    get stage (): string {
        return this._projectModel.stage;
    }

    get phase (): string {
        return this._projectModel.phase;
    }

    get startDate (): string {
        return this._projectModel.startDate;
    }

    get finishDate (): string {
        return this._projectModel.finishDate;
    }

    get notes (): string {
        return this._projectModel.notes;
    }

}
Object.seal(ProjectModel);
export =  ProjectModel;
