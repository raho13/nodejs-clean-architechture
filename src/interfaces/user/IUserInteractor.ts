import { User } from "../../entities/User.js";

export interface IUserInteractor {
  login(email: string, password: string): Promise<string>;
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
