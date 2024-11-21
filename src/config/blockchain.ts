import Web3 from 'web3';
import { config } from './dotenv';

export const getBlockchainProvider = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider(config.providerUrl));
    const account = web3.eth.accounts.privateKeyToAccount(config.privateKey);
    web3.eth.accounts.wallet.add(account);
    return { web3, account };
};
