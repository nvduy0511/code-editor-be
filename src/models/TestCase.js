import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    input: String,
    output: String,
    idExercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
});

export default mongoose.model('testcases', schema);
