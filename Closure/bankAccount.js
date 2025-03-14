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
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("insufficient funds");
            } else {
                balance -= amount
                console.log(`Withdrawn from account: $${amount} Balance: $${balance}`)
            }

        },
        checkBalance: function () {
            return balance;
        }
    }
}
let myAccount = createBankAccount(1000);
console.log(`current balance $${myAccount.checkBalance()}`)
