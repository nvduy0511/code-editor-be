import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Exercise {
        _id: ID!
        level: String
        title: String
        question: String
        constraint: String
        inputFormat: String
        outputFormat: String
        tag: String
        numberOfSuccess: Int
        numberOfDoExercise: Int
        imgLink: String
        testCases: [TestCase]
    }

    input TestCaseInput {
        input: String
        output: String
    }

    type TestCase {
        _id: ID!
        value: Int
    }

    type User {
        _id: ID!
        displayName: String
        email: String
        photoUrl: String
        token: String
    }

    # ROOT TYPE
    type Query {
        exercises: [Exercise]
        exercise(_id: ID!): Exercise
        user: User
    }

    type Mutation {
        createUser(displayName: String, email: String, photoUrl: String): User

        loginOrCreate(_id: String, displayName: String, email: String, photoUrl: String): User

        createExercise(
            level: String
            title: String
            question: String
            constraint: String
            inputFormat: String
            outputFormat: String
            tag: String
            numberOfSuccess: Int
            numberOfDoExercise: Int
            imgLink: String
            testCases: [TestCaseInput]
        ): Boolean

        createDoExercise(
            idUser: String
            idExercise: ID
            testCasePass: Int
            code: String
            time: String
            language: String
        ): Boolean
    }
`;

export default typeDefs;
