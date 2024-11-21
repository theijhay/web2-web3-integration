import { getUsers, createUser } from '../../services/database.service';

export const databaseResolvers = {
    Query: {
        getUsers: async () => await getUsers(),
    },
    Mutation: {
        createUser: async (_: any, { name, email }: { name: string; email: string }) =>
            await createUser(name, email),
    },
};
