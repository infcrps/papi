/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IProjectModel = require("./../../model/interfaces/ProjectModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProjectSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            priority : {
                type: String,
                required: true
            },
            category : {
                type: String,
                required: true
            },
            stage : {
                type: String,
                required: true
            },
            phase : {
                type: String,
                required: true
            },
            startDate : {
                type: String,
                required: false
            },
            finishDate : {
                type: String,
                required: false
            },
            notes : {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IProjectModel>("Projects", ProjectSchema.schema);
export = schema;""
