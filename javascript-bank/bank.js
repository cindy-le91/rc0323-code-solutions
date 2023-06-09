/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (isNaN(balance) || balance <= 0 || !Number.isInteger(balance)) {
    return null;
  }

  if (balance > 0) {
    const newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};
Bank.prototype.getAccount = function (number) {
  const account = this.accounts.find(account => account.number === parseInt(number));

  if (!account) {
    return null;
  }

  return account;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    totalAssets += account.getBalance();
  }
  return totalAssets;
};
