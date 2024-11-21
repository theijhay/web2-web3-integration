import { gql } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const blockchainSchema = loadSchemaSync('./blockchain.graphql', {
  loaders: [new GraphQLFileLoader()]
});
const databaseSchema = loadSchemaSync('./database.graphql', {
  loaders: [new GraphQLFileLoader()]
});

export const typeDefs = gql`
    ${blockchainSchema}
    ${databaseSchema}
`;
