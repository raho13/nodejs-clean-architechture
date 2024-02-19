import { inject, injectable } from "inversify";
import { User } from "../entities/User.js";
import { IUserRepository } from "../interfaces/user/IUserRepository.ts";
import { INTERFACE_TYPE } from "../utils/appConsts.ts";
import { IToken } from "../interfaces/IToken.ts";
import { IHash } from "../interfaces/IHash.ts";
import { IUserService } from "../interfaces/user/IUserService.ts";
@injectable()
export class UserService implements IUserService {
  private repository: IUserRepository;
  private token: IToken;
  private hash: IHash;
  constructor(
    @inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository,
    @inject(INTERFACE_TYPE.Token) token: IToken,
    @inject(INTERFACE_TYPE.Hash) hash: IHash
  ) {
    this.repository = repository;
    this.token = token;
    this.hash = hash;
  }
  async login(email: string, password: string): Promise<string> {
    const user = await this.repository.login(email);
    if (user) {
      const isCorrect = await this.hash.comparePassword(
        password,
        user.password ?? ""
      );

      if (isCorrect) {
        const token = await this.token.generateToken(user);
        return token;
      }
      throw new Error("User email or password incorrect");
    } else {
      throw new Error("User does not exists");
    }
  }
  async register(
    name: string,
    phoneNumber: string,
    email: string,
    password: string
  ): Promise<string> {
    const hashedPassword = await this.hash.hashPassword(password);

    const user = await this.repository.register(
      name,
      phoneNumber,
      email,
      hashedPassword
    );
    if (user) {
      return "User created";
    }
    throw new Error("User already exists or create failed");
  }
  async getAllUsers(): Promise<User[]> {
    const users = await this.repository.getAllUsers();
    return users;
  }
  async deleteUser(id: string): Promise<string> {
    const result = await this.repository.deleteUser(id);
    if (result) {
      return "User deleted";
    }
    throw new Error("User not found or delete failed");
  }
  async updateUser(id: string, user: User): Promise<string> {
    const result = await this.repository.updateUser(id, user);
    if (result) {
      return "User updated";
    }
    throw new Error("User not found or update failed");
  }
}
