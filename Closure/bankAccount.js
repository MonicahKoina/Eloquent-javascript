/*
Exercise 1: Create a Simple Bank Account Using Closures
Task:

Write a function createBankAccount(initialBalance).
Inside the function, store balance as a private variable.
Return an object with three methods:
deposit(amount): Adds money to the balance.
withdraw(amount): Deducts money (but only if there’s enough balance).
checkBalance(): Logs the current balance.
*/
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposit amount: $${amount}, Current balance: $${balance}`)
        }
    }
}
let myAccount = createBankAccount(1000);
myAccount.deposit(700);