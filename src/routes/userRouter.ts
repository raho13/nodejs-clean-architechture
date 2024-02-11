import { Router } from "express";
import { Container } from "inversify";
import { IUserInteractor } from "../interfaces/user/IUserInteractor.js";
import { INTERFACE_TYPE } from "../utils/appConsts.ts";
import { UserInteractor } from "../interactors/userInteractor.ts";
import { IUserRepository } from "../interfaces/user/IUserRepository.ts";
import { UserRepository } from "../repositories/userRepository.ts";
import { UserController } from "../controllers/userController.ts";
import { Token } from "../libs/token.ts";
import { Hash } from "../libs/hash.ts";

const userRouter = Router();

const container = new Container();

container
  .bind<IUserInteractor>(INTERFACE_TYPE.UserInteractor)
  .to(UserInteractor);
container
  .bind<IUserRepository>(INTERFACE_TYPE.UserRepository)
  .to(UserRepository);

container.bind(INTERFACE_TYPE.UserController).to(UserController);
container.bind(INTERFACE_TYPE.Token).to(Token);
container.bind(INTERFACE_TYPE.Hash).to(Hash);
const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

export default userRouter;
