import { User } from '../models/User';

export const getUsers = async () => await User.find();
export const createUser = async (name: string, email: string) => await User.create({ name, email });
