import { User } from "../entities/User.js";
import { IUserRepository } from "../interfaces/user/IUserRepository.js";

export class UserRepository implements IUserRepository{
    login(email: string): Promise<User> {
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