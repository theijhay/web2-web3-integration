import express, { Application } from 'express';
import { ApolloServer, ServerRegistration } from 'apollo-server-express';
import { connectDatabase } from './config/database';
import { createContext } from './graphql/context';
import { typeDefs } from './graphql/schemas';
import { resolvers } from './graphql/resolvers';

const app: Application = express();

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers, context: createContext });
    const registration: ServerRegistration = {
        app: app as any, // Force type compatibility
    };
    await server.start();
    server.applyMiddleware({ ...registration });
};

connectDatabase();
startServer();

export default app;
