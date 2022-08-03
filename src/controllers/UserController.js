import UserModel from '../models/UserModel';

class UserController {
    async findOrCreate(req, res) {
        const user_req = req.body;
        const user_exist = await UserModel.findOne({ _id: { $eq: user_req._id } }).exec();
        if (user_exist === null) {
            try {
                const user = new UserModel(user_req);
                await user.save();
                res.json({ isCreate: true, user: user });
            } catch (error) {
                res.json({ status: false });
            }
        } else {
            res.json({ isCreate: false, user: user_exist });
        }
    }

    async getOne(req, res) {
        const user = await UserModel.findOne({ _id: { $eq: req.query._id } });
        res.json(user);
    }

    async getAll(req, res) {
        const users = await UserModel.find();
        res.json(users);
    }
}

export default new UserController();
