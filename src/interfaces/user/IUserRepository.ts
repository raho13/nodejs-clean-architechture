import { User } from "../../entities/User.js";

export interface IUserRepository {
  login(email: string ): Promise<User>;
  register(
    name: string,
    phoneNumber: string,
    email: string,
    password: string
  ): Promise<string>;
  getAllUsers(): Promise<User[]>;
  deleteUser(id: string): Promise<string>;
  updateUser(id: string, user: User): Promise<string>;
}
