class BankAccount {
    accountName;
    accountNumber;
    #balance = 0;

    constructor(accountName, balance = 0) {
        this.accountName = accountName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(amount) {
        if(isNaN(amount)){
            throw new Error("Amount is not valid input");
        }
        this.#balance = amount;
    }

    getBalance(){
        console.log(`Total Account Balance is ${this.#balance}`);
    }
}

class CurrentAccount extends BankAccount {
    constructor(accountName, balance = 0, transactionLimit = 50000) {
        super(accountName, balance);

        this.transactionLimit = transactionLimit;
    }
}

const NirajAccount = new CurrentAccount("Niraj");
NirajAccount.setBalance(4000);


console.log(NirajAccount);
NirajAccount.getBalance();