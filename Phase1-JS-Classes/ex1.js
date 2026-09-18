// this is the basic syntax of creating a class
class BankAccount{
    constructor(owner, balance, accountNumber){
        this.owner = owner;
        this._balance = balance;
        this._accountNumber = accountNumber;
    }

    static IFSC_code = "UBIN1005";

    static getBankName(){
        return "ABC bank";
    }
    
    get accountNumber(){
        return this._accountNumber;
    }
    
    get balance(){
        return this._balance;
    }
    
    set balance(amount){
        if (amount >= 0){
            this._balance = amount;
        }else{
            console.log("Balance cannot be negative");
        }
    }

    deposit(amount){
       if (amount > 0) {
            this._balance += amount;
        } else {
            console.log("Invalid deposit");
        }
    }

    withdraw(amount){
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.log("Invalid withdrawal");
        }
    }
}

class SavingsAccount extends BankAccount{

    constructor(owner, balance, accountNumber, interestRate){
        super(owner,balance,accountNumber);
        this.interestRate = interestRate;
    }

    addInterest(){
        const interest = this._balance * this.interestRate / 100;
        this._balance += interest;
    }
}

class PremiumSavingsAccount extends SavingsAccount {

    constructor(owner, balance, accountNumber, interestRate, bonusRate) {
        super(owner, balance, accountNumber, interestRate);
        this.bonusRate = bonusRate;
    }

    addInterest() {
        const totalInterest = this.interestRate + this.bonusRate;
        const interest = this._balance * totalInterest / 100;

        this._balance += interest;
    }

    withdraw(amount) {
        console.log("Premium Withdrawal");
        super.withdraw(amount);
    }
}


const basic = new BankAccount(
    "Shubh",
    5000,
    "ACC001"
);

const savings = new SavingsAccount(
    "Shubh",
    5000,
    "SAV001",
    5
);

const premium = new PremiumSavingsAccount(
    "Shubh",
    5000,
    "PREM001",
    5,
    2
);

basic.deposit(1000);

savings.addInterest();

premium.addInterest();

premium.withdraw(1000);

/* 
Learning of phase 1:
1) classes and objects
2) methods
3) inheritance
4) use of super keyword
5) static keyword
6) this keyword
7) getters and setters
*/