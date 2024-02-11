import { injectable } from "inversify";
import { IHash } from "../interfaces/IHash.ts";
import { compare, hash } from "bcrypt";
@injectable()
export class Hash implements IHash {
  async hashPassword(data: string): Promise<string> {
    const result = await hash(data, 10);
    if (result) {
      return result;
    }
    throw new Error("Password could not hash");
  }
  async comparePassword(data: string, hash: string): Promise<boolean> {
    const result = await compare(data, hash);
    return result;
  }
}
