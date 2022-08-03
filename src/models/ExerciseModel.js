import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    level: String,
    title: String,
    question: String,
    constraint: String,
    inputFormat: String,
    outputFormat: String,
    tag: String,
    numberOfSuccess: Number,
    numberOfDoExercise: Number,
    imgLink: String,
    testCase: [
        {
            input: String,
            output: String,
        },
    ],
});

export default mongoose.model('exercises', schema);
