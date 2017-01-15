/**
 * Created by Matthew on 10-01-2017
 */

import mongoose = require("mongoose");

interface ProjectModel extends mongoose.Document {
    name: string;
    priority: string;
    category: string;
    stage: string;
    phase: string;
    startDate: string;
    finishDate: string;
    notes: string;
}

export = ProjectModel;
