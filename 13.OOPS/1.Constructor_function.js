// creation of constructor function 
function AccountDetails(accountName, balance = 0) {
    // properties
    this.accountName = accountName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // deposit method/function
    this.deposit = function(amount) {
        this.balance += amount;
    };

    // withdraw method/function
    this.withdraw = (amount) => {
        this.balance -= amount;
    };
}

// object creation (2-objects)
const NirajAccount = new AccountDetails("Niraj Kumar Dangi", 500);
const johnAccount = new AccountDetails("John Doe");

// object calling (2-objects)
// console.log(NirajAccount);
// console.log(johnAccount);

// deposit 2000 to NirajAccount
NirajAccount.deposit(2000);
console.log(NirajAccount.balance); // 2500 (500+2000)

// withdraw 1000 to NirajAccount
NirajAccount.withdraw(1000);
console.log(NirajAccount.balance); // 1500 (2500-1000)