from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def register_validator(self, postData):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}
        if len(postData['first_name']) < 2:
            errors['first_name'] = "First name must be at least 2 characters."
        if len(postData['last_name']) < 2:
            errors['last_name'] = "Last name must be at least 2 characters."
        if not EMAIL_REGEX.match(postData['email']):
            errors['email_password'] = "Email/Password error."
        elif User.objects.filter(email=postData['email']).exists():
            errors['email_password'] = "Email/Password error."
        if len(postData['password']) < 8:
            errors['password'] = "Password not long enough."
        elif postData['password'] != postData['pass_confirm']:
            errors['password'] = "Passwords do not match."
        return errors
    def login_validator(self, postData):
        errors = {}
        user = User.objects.filter(email=postData['email'])
        if not user:
            errors['email_password'] = "Email/Password error."
        else:
            if user:
                logged_user = user[0]
                if bcrypt.checkpw(postData['password'].encode('utf-8'), logged_user.password.encode('utf-8')) == False:
                    errors['email_password'] = "Email/Password error."
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=100)
    objects = UserManager()
    def __str__(self):
        return f"<{self.first_name} ({self.id})>"

