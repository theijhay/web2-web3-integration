import Web3 from 'web3';
import { CONTRACT_ADDRESS } from '../contracts/addresses';
import CounterABI from '../contracts/abi/Counter.json';
import { getBlockchainProvider } from '../config/blockchain';

const { web3, account } = getBlockchainProvider();
const contract = new web3.eth.Contract(CounterABI as any, CONTRACT_ADDRESS);

export const getCounter = async (): Promise<number> => {
    try {
        return await contract.methods.getCounter().call();
    } catch (error) {
        console.error('Error fetching counter value:', error);
        throw new Error('Failed to fetch counter value');
    }
};

export const incrementCounter = async (): Promise<boolean> => {
    try {
        const tx = contract.methods.increment();
        await sendTransaction(tx);
        return true;
    } catch (error) {
        console.error('Error incrementing counter:', error);
        throw new Error('Failed to increment counter');
    }
};

export const decrementCounter = async (): Promise<boolean> => {
    try {
        const tx = contract.methods.decrement();
        await sendTransaction(tx);
        return true;
    } catch (error) {
        console.error('Error decrementing counter:', error);
        throw new Error('Failed to decrement counter');
    }
};

// Helper function to send transactions
const sendTransaction = async (tx: any) => {
    const gas = await tx.estimateGas({ from: account.address });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();

    const txObject = {
        from: account.address,
        to: CONTRACT_ADDRESS,
        gas,
        gasPrice,
        data,
    };

    const signedTx = await account.signTransaction(txObject);
    if (!signedTx.rawTransaction) throw new Error('Failed to sign transaction');
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
};
