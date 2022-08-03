import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    idUser: { type: String, ref: 'User' },
    // idExercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
    idExercise: { type: String },
    testCasePass: Number,
    code: String,
    time: String,
    language: String,
});

export default mongoose.model('doExercises', schema);
