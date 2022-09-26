import { BreachAccountResponse } from "../models/response";

export abstract class AuditService {
  passwordLeaked: (password: string) => Promise<number>;
  breachedAccounts: (username: string) => Promise<BreachAccountResponse[]>;
}
