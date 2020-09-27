class BankAccount:
    def __init__(self, int_rate=0.01, balance = 0):
        self.int_rate = int_rate
        self.account_balance = balance

    def deposit(self, amount):
        self.account_balance += amount
        return self

    def withdraw(self, amount):
        self.account_balance -= amount
        return self

    def display_account_info(self):
        print("Interest Rate: " + str(self.int_rate) + "Account Balance: " + str(self.account_balance))
        return self

    def yield_interest(self):
        self.account_balance += (self.account_balance * self.int_rate)
        return self


kim = BankAccount()
mom = BankAccount()

kim.deposit(58).deposit(158).deposit(258).withdraw(20).yield_interest().display_account_info()

mom.deposit(2000).deposit(150).withdraw(500).withdraw(38).withdraw(50).withdraw(87).display_account_info()
