const resolvers = {
    // QUERY
    Query: {
        exercise: (parent, { id }) => ({
            id: id,
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
        }),
    },

    Exercise: {
        testCases: ({ id }, args) => [
            { id: 1, value: id },
            { id: 2, value: id },
            { id: 3, value: id },
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

export default resolvers;
