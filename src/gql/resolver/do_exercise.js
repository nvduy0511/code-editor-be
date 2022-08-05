const resolversDoExercise = {
    // QUERY
    Query: {},

    // MUTATION
    Mutation: {
        createDoExercise: async (parent, data, { models: { DoExercise }, authValidation }) => {
            authValidation.ensureThatUserIsLogged(context); //check user login

            try {
                const doExercise = new DoExercise(data);
                await doExercise.save();
            } catch (error) {
                return false;
            }
            return true;
        },
    },
};

export default resolversDoExercise;
