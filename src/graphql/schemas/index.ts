import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const loadedSchemas = loadFilesSync('./src/graphql/schemas/**/*.graphql', {
  extensions: ['graphql'],
});

const additionalSchema = loadSchemaSync('./src/graphql/schemas/database.graphql', {
  loaders: [new GraphQLFileLoader()],
});

const mergedTypeDefs = mergeTypeDefs([...loadedSchemas, additionalSchema]);

export const typeDefs = mergedTypeDefs;
