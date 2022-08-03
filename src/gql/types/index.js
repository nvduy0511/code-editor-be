import { gql } from 'apollo-server-express';
const typeDefs = gql`
    type Exercise {
        id: ID!
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
        id: ID!
        value: Int
    }
    type DoExercise {
        id: ID!
        exercise: Exercise
        testCasePass: Int
        code: String
        time: String
        language: String
    }
    type User {
        id: ID!
        displayName: String
        email: String
        photoURL: String
    }
    # ROOT TYPE
    type Query {
        exercises: [Exercise]
        exercise(id: ID!): Exercise
        user: User
        doExercise: DoExercise
    }
    type Mutation {
        createUser(displayName: String, email: String, photoURL: String): User
        # createExercise(
        #     level: String
        #     title: String
        #     question: String
        #     constraint: String
        #     inputFormat: String
        #     outputFormat: String
        #     tag: String
        #     numberOfSuccess: Int
        #     numberOfDoExercise: Int
        #     imgLink: String
        # ): Exercise
    }
`;

export default typeDefs;
