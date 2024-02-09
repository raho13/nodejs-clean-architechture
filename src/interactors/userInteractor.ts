import { User } from "../entities/User.js";
import { IUserInteractor } from "../interfaces/user/IUserInteractor.js";

export class UserInteractor implements IUserInteractor{
    login(email: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    register(name: string, phoneNumber: string, email: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: string, user: User): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
}