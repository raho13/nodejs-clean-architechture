import { injectable } from "inversify";
import { IToken } from "../interfaces/IToken.ts";
import { sign, verify } from "jsonwebtoken";
@injectable()
export class Token implements IToken {
  async generateToken(data: any): Promise<string> {
    const token = await sign({ data }, "secretKey", {
      expiresIn: "1h",
    });
    return token;
  }

  async verifyToken(token: string): Promise<any> {
    const data = await verify(token, "secretKey");
    return Promise.resolve(data);
  }
}
