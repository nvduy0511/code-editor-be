import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const URI = process.env.MONGODB_URI;

const config = async () => {
    let isConnect = false;
    await mongoose
        .connect(URI)
        .then(() => {
            isConnect = true;
        })
        .catch((err) => {
            console.log(err.reason);
            isConnect = false;
        });
    return new Promise((resolve, reject) => {
        if (isConnect) resolve();
        else reject("Connect to DB fail, Can't start app!");
    });
};

export default { config };
