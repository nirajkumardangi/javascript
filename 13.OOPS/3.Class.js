class AccountDetails {
    accountName;
    accountNumber;
    balance = 0;

    constructor(name, balance){
        this.accountName = name;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

// object creation
const NirajAccount = new AccountDetails("Niraj Kumar", 2000);
const AnilAccount = new AccountDetails("Anil Kumar", 2000);

// object calling
console.log(NirajAccount);
console.log(AnilAccount);

// using deposit method
NirajAccount.deposit(1000);
AnilAccount.deposit(1000);

// using withdraw
NirajAccount.withdraw(500);
AnilAccount.withdraw(500);