/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProjectSchema = require("./../dataAccess/schemas/ProjectSchema");
var RepositoryBase = require("./BaseRepository");
var ProjectRepository = (function (_super) {
    __extends(ProjectRepository, _super);
    function ProjectRepository() {
        return _super.call(this, ProjectSchema) || this;
    }
    return ProjectRepository;
}(RepositoryBase));
Object.seal(ProjectRepository);
module.exports = ProjectRepository;
//# sourceMappingURL=ProjectRepository.js.map