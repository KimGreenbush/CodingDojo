class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print("User: " + self.name + ", Balance: $" + str(self.account_balance))
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self


kim = User("Kimberley", "kk@gg.com")
mom = User("Mom", "mom@gg.com")
dad = User("Dad", "dad@gg.com")


kim.make_deposit(25).make_deposit(35).make_deposit(80).make_withdrawal(40).display_user_balance()

mom.make_deposit(2680).make_deposit(400).make_withdrawal(100).make_withdrawal(100).display_user_balance()

dad.make_deposit(2358).make_withdrawal(150).make_withdrawal(85).make_withdrawal(26).display_user_balance()

mom.transfer_money(kim, 300).display_user_balance()
kim.display_user_balance()
