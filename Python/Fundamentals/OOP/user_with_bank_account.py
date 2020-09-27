class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_one = BankAccount(int_rate=0.01, balance=0)
        self.account_two = BankAccount(int_rate=0.02, balance=0)


class BankAccount:
    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.account_balance = balance

    def deposit(self, amount):
        self.account_balance += amount
        return self

    def withdraw(self, amount):
        self.account_balance -= amount
        return self

    def display_user_info(self):
        print("Account Balance: $" + str(self.account_balance) + ", Interest Rate: " + str(self.int_rate))
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

    def yield_interest(self):
        self.account_balance += (self.account_balance * self.int_rate)
        return self


kim = User("Kimberley", "kk@gg.com")
kim.account_one.deposit(85)
kim.account_one.display_user_info()
kim.account_two.deposit(100)
kim.account_two.display_user_info()