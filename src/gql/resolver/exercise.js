const resolversExercise = {
    // QUERY
    Query: {
        exercise: (parent, { _id }, context) => {
            context.authValidation.ensureThatUserIsLogged(context);
            return {
                _id: _id,
                level: 'Kho',
                title: 'Tim so lon nhat',
                question: 'Tim so lon nhat sau khi nhap vao',
                constraint: 'Tat ca moi so > 0',
                inputFormat: 'Nho hon 0',
                outputFormat: 'String',
                tag: 'plus',
                numberOfSuccess: 1,
                numberOfDoExercise: 2,
                imgLink: 'temp',
            };
        },
    },

    Exercise: {
        testCases: ({ _id }, args) => [
            { _id: '111', value: _id },
            { _id: '222', value: _id },
            { _id: '333', value: _id },
        ],
    },

    // MUTATION
    Mutation: {
        // createAuthor: async (parent, args, { mongoDataMethods }) =>
        //     await mongoDataMethods.createAuthor(args),
        // createBook: async (parent, args, { mongoDataMethods }) =>
        //     await mongoDataMethods.createBook(args),
    },
};

export default resolversExercise;
