import { blockchainResolvers } from './blockchain';
import { databaseResolvers } from './database';

export const resolvers = {
    Query: {
        ...blockchainResolvers.Query,
        ...databaseResolvers.Query,
    },
    Mutation: {
        ...blockchainResolvers.Mutation,
        ...databaseResolvers.Mutation,
    },
};
