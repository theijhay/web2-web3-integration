import { getCounter, incrementCounter, decrementCounter } from '../../services/blockchain.service';

export const blockchainResolvers = {
    Query: {
        getCounter: async () => await getCounter(),
    },
    Mutation: {
        incrementCounter: async () => {
            await incrementCounter();
            return true;
        },
        decrementCounter: async () => {
            await decrementCounter();
            return true;
        },
    },
};
