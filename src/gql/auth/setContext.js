import { validateAuthToken, createAuthToken } from './jwt.js';
import { environmentVariablesConfig } from '../../configs/appConfig.js';
import { authValidations } from '../auth/authValidations.js';
import { ENVIRONMENT } from '../../configs/environment.js';
import Exercise from '../../models/ExerciseModel';
import DoExercise from '../../models/DoExerciseModel';
import TestCase from '../../models/TestCaseModel';
import User from '../../models/UserModel';

const setContext = async ({ req }) => {
    const context = {
        models: {
            Exercise,
            DoExercise,
            TestCase,
            User,
        },
        authValidation: {
            ...authValidations,
        },
        jwt: {
            createAuthToken: createAuthToken,
        },
    };

    let token = req.headers['authorization'];
    // console.log({ token });

    if (token && typeof token === 'string') {
        try {
            const authenticationScheme = 'Bearer ';
            if (token.startsWith(authenticationScheme)) {
                token = token.slice(authenticationScheme.length, token.length);
            }
            const user = await validateAuthToken(token);
            context.user = user; // Add to Apollo Server context the user who is doing the request if auth token is provided and it's a valid token
        } catch (error) {
            if (environmentVariablesConfig.enviroment !== ENVIRONMENT.PRODUCTION) {
                logger.debug(error.message);
            }
        }
    }

    return context;
};
export default setContext;
