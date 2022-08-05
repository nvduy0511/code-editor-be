import merge from 'lodash.merge';
import resolversExercise from './exercise';
import resolversUser from './user';

const resolvers = merge(resolversExercise, resolversUser);

export default resolvers;
