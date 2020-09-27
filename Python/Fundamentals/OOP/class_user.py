class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print("User: " + self.name + ", Balance: $" + str(self.account_balance))
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount

kim = User("Kimberley", "kk@gg.com")
mom = User("Mom", "mom@gg.com")
dad = User("Dad", "dad@gg.com")


kim.make_deposit(25)
kim.make_deposit(35)
kim.make_deposit(80)
kim.make_withdrawal(40)
kim.display_user_balance()

mom.make_deposit(2680)
mom.make_deposit(400)
mom.make_withdrawal(100)
mom.make_withdrawal(100)
mom.display_user_balance()

dad.make_deposit(2358)
dad.make_withdrawal(150)
dad.make_withdrawal(85)
dad.make_withdrawal(26)
dad.display_user_balance()

mom.transfer_money(kim, 300)
mom.display_user_balance()
kim.display_user_balance()