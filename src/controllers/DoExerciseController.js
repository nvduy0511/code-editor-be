const DoExerciseModel = require('../models/DoExerciseModel');

class DoExerciseController {
    async createOrUpdate(req, res) {
        const { _id, ...doExercise } = req.body;
        if (_id) {
            //update
            const result = await DoExerciseModel.findByIdAndUpdate(_id, { ...doExercise });
            res.json(result);
        } else {
            //create
            const result = await DoExerciseModel.create(doExercise);
            res.json(result);
        }
    }
    async delete(req, res) {
        const _id = req.query._id;
        const result = await DoExerciseModel.deleteOne({ _id: _id });
        res.json(result);
    }
}

module.exports = new DoExerciseController();
