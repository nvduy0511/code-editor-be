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
    type TestCase {
        _id: ID!
        value: Int
    }
    type DoExercise {
        _id: ID!
        exercise: Exercise
        testCasePass: Int
        code: String
        time: String
        language: String
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
        doExercise: DoExercise
    }
    type Mutation {
        createUser(displayName: String, email: String, photoUrl: String): User
        loginOrCreate(
            _id: String
            displayName: String
            email: String
            photoUrl: String
        ): User
    }
`;

export default typeDefs;
