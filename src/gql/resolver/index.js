import merge from 'lodash.merge';
import resolversExercise from './exercise';
import resolversUser from './user';
import resolversDoExercise from './do_exercise';

const resolvers = merge(resolversExercise, resolversUser, resolversDoExercise);

export default resolvers;
