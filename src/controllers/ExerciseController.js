const ExerciseModel = require('../models/ExerciseModel');
const { findByIdAndUpdate } = require('../models/ExerciseModel');
const exerciseModel = require('../models/ExerciseModel');

class ExerciseController {
    async createOrUpdate(req, res) {
        const { _id, ...exercise } = req.body;
        let result;
        if (_id) {
            //update
            result = await exerciseModel.findByIdAndUpdate(_id, { ...exercise });
        } else {
            //create
            result = await exerciseModel.create(exercise);
        }
        res.json(result);
    }
    async delete(req, res) {
        const _id = req.query._id;
        const result = await ExerciseModel.deleteOne({ _id: _id });
        res.json(result);
    }

    async getAll(req, res) {
        const result = await ExerciseModel.find();
        res.json(result);
    }
}

module.exports = new ExerciseController();
