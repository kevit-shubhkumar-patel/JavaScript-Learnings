import BankAccount from "./BankAccount.mjs";
import { validateAccountNumber } from "./validation.mjs";
import * as math from "./math.mjs";

const account = new BankAccount(
    "Shubh",
    5000,
    "ACC001"
);

console.log(validateAccountNumber(account.accountNumber));

account.deposit(1000);

console.log(account.balance);

console.log(math.add(2,4));
console.log(math.subtract(10, 5));