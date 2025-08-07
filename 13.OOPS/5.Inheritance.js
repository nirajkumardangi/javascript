class AccountDetails {
    constructor(accountName, balance = 0) {
        this.accountName = accountName;
        this.accountNumber = Date.now();
        this.balance = balance;
        this.loanAmount = [];
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account number ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account number ${this.accountNumber}. New balance: ${this.balance}`);
    }

    takeLoan(loanAmount = 0) {
        this.loanAmount.push(loanAmount);
        console.log(`You take ${loanAmount} Loan in ${this.accountNumber} Account`);
    }

    getTotalLoans() {
        const totalLoans = this.loanAmount.reduce((total, amount) => total += amount, 0);
        console.log(`Total loans in ${this.accountNumber} Account: ${totalLoans}`);
    }

    greet() {
        console.log("Good Morning");
    }
}

class SavingAccountDetails extends AccountDetails {
    constructor(name, balance, transactionLimit = 50000) {
        super(name, balance);
        this.transactionLimit = transactionLimit;
    }

    takePersonalLoan(amount) {
        this.takeLoan(amount);
    }
}

class CurrentAccountDetails extends AccountDetails {
    constructor(name, balance, transactionLimit = 100000) {
        super(name, balance);
        this.transactionLimit = transactionLimit;
    }

    takeBusinessLoan(amount) {
        this.takeLoan(amount);
    }

    // using super keyword to inherit
    sayHi() {
        super.greet();
        console.log("Hii.." + this.accountName);
    }
}

// const object1 = new CurrentAccountDetails("Niraj", 5000);
// console.log(object1);
// object1.sayHi();

const NirajSavingAccount = new SavingAccountDetails("Niraj", 2000);

NirajSavingAccount.withdraw(500);
NirajSavingAccount.deposit(500);

console.log(NirajSavingAccount);

NirajSavingAccount.takePersonalLoan();
NirajSavingAccount.takePersonalLoan(22000);

NirajSavingAccount.getTotalLoans();

/* Output:
Withdrawn 500 from account number 1704902142214. New balance: 1500 
Deposited 500 into account number 1704902142214. New balance: 2000 

Object { accountName: "Niraj", accountNumber: 1704902142214, balance: 2000, loanAmount: [0, 22000], transactionLimit: 50000 }

You take 0 Loan in 1704902142214 Account 
You take 20000 Loan in 1704902142214 Account 
Total loans in 1704902142214 Account: 22000

*/