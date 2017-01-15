/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var express = require("express");
var ProjectController = require("./../../controllers/ProjectController");
var router = express.Router();
var ProjectRoutes = (function () {
    function ProjectRoutes() {
        this._projectController = new ProjectController();
    }
    Object.defineProperty(ProjectRoutes.prototype, "routes", {
        get: function () {
            var controller = this._projectController;
            router.get("/projects", controller.retrieve);
            router.post("/projects", controller.create);
            router.put("/projects/:_id", controller.update);
            router.get("/projects/:_id", controller.findById);
            router.delete("/projects/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return ProjectRoutes;
}());
Object.seal(ProjectRoutes);
module.exports = ProjectRoutes;
//# sourceMappingURL=ProjectRoutes.js.map