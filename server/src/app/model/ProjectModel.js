/**
 * Created by Matthew on 10-01-2017
 */
"use strict";
var ProjectModel = (function () {
    function ProjectModel(projectModel) {
        this._projectModel = projectModel;
    }
    Object.defineProperty(ProjectModel.prototype, "name", {
        get: function () {
            return this._projectModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "priority", {
        get: function () {
            return this._projectModel.priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "category", {
        get: function () {
            return this._projectModel.category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "stage", {
        get: function () {
            return this._projectModel.stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "phase", {
        get: function () {
            return this._projectModel.phase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "startDate", {
        get: function () {
            return this._projectModel.startDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "finishDate", {
        get: function () {
            return this._projectModel.finishDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "notes", {
        get: function () {
            return this._projectModel.notes;
        },
        enumerable: true,
        configurable: true
    });
    return ProjectModel;
}());
Object.seal(ProjectModel);
module.exports = ProjectModel;
//# sourceMappingURL=ProjectModel.js.map