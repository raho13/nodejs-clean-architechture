import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils/appConsts.ts";
import { Request, Response } from "express";
import { IUserService } from "../interfaces/user/IUserService.ts";

@injectable()
export class UserController {
  private service: IUserService;

  constructor(@inject(INTERFACE_TYPE.UserService) service: IUserService) {
    this.service = service;
  }

  async onLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const token = await this.service.login(email, password);
      if (token) {
        return res.status(200).json({ token });
      } else {
        return res.status(400).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async onRegister(req: Request, res: Response) {
    const { name, email, password, phoneNumber } = req.body;
    try {
      const result = await this.service.register(
        name,
        email,
        password,
        phoneNumber
      );
      if (result) {
        return res.status(200).json({
          message: "Register success",
        });
      } else {
        return res.status(400).json({
          message: "Register failed",
        });
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async onGetAllUsers(req: Request, res: Response) {
    try {
      const users = await this.service.getAllUsers();
      if (users) res.status(200).json(users);
      else res.status(400).json([]);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async onUpdateUser(req: Request, res: Response) {
    const { id, name, email, phoneNumber, password } = req.body;
    try {
      const result = await this.service.updateUser(id, {
        name,
        email,
        phoneNumber,
        password,
      });
      if (result) res.status(200).json({ message: "Update success" });
      else res.status(400).json({ message: "Update failed" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async onDeleteUser(req: Request, res: Response) {
    const { id } = req.body;
    try {
      const result = await this.service.deleteUser(id);
      if (result) res.status(200).json({ message: "Delete success" });
      else res.status(400).json({ message: "Delete failed" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
