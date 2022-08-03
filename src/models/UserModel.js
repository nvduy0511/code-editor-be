import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    _id: String,
    displayName: String,
    email: String,
    photoURL: {
        type: 'String',
        required: true,
        default:
            'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
});

export default mongoose.model('users', schema);
