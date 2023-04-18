/* exported Account */
const transactionTypeWithdrawal = 'withdrawal';
const transactionTypeDeposit = 'deposit';

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (isNaN(amount) || amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }

  if (amount > 0) {
    this.transactions.push(new Transaction(transactionTypeDeposit, amount));

    return true;
  }

};
Account.prototype.withdraw = function (amount) {
  if (isNaN(amount) || amount <= 0 || !Number.isInteger(amount)) {
    return false;
  }

  if (amount >= 0) {
    this.transactions.push(new Transaction(transactionTypeWithdrawal, amount));

    return true;
  }
};
Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }

  return this.transactions.reduce(function (sum, transaction) {
    if (transaction.type === transactionTypeDeposit) {
      return sum + transaction.amount;
    } else if (transaction.type === transactionTypeWithdrawal) {
      return sum - transaction.amount;
    } else {
      return sum;
    }
  }, 0);

};
