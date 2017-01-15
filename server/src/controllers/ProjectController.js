/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var ProjectBusiness = require("./../app/business/ProjectBusiness");
var ProjectController = (function () {
    function ProjectController() {
    }
    ProjectController.prototype.create = function (req, res) {
        try {
            var project = req.body;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.create(project, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    ProjectController.prototype.update = function (req, res) {
        try {
            var project = req.body;
            var _id = req.params._id;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.update(_id, project, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    ProjectController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    ProjectController.prototype.retrieve = function (req, res) {
        try {
            var projectBusiness = new ProjectBusiness();
            projectBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    ProjectController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return ProjectController;
}());
module.exports = ProjectController;
//# sourceMappingURL=ProjectController.js.map