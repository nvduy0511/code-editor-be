const resolversUser = {
    // QUERY
    Query: {},

    // MUTATION
    Mutation: {
        loginOrCreate: async (parent, { _id, displayName, email, photoUrl }, context) => {
            let user = await context.models.User.findOne({ _id: _id }).lean();
            if (user === null) {
                user = new context.models.User({
                    _id,
                    displayName,
                    email,
                    photoUrl,
                });
                await user.save();
                user = user.toObject();
            }
            const token = context.jwt.createAuthToken(user);
            console.log({ ...user, token });
            return { ...user, token };
        },
    },
};

export default resolversUser;
