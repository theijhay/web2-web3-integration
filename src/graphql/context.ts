import { getBlockchainProvider } from '../config/blockchain';

export const createContext = () => {
    const { web3, account } = getBlockchainProvider();
    return { web3, account };
};
