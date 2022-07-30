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
        const result = await exerciseModel.deleteOne({ _id: _id });
        res.json(result);
    }
    async getLength(req, res) {
        const result = await exerciseModel.count();
        res.json({ length: result });
    }

    async getAll(req, res) {
        const { page, limit } = req.query;

        const result = await exerciseModel
            .find()
            .skip((page - 1) * limit)
            .limit(limit);
        res.json(result);
    }
}

module.exports = new ExerciseController();
