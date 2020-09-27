from django.db import models
import bcrypt
import re

class UserManager(models.Manager):
    def register_validator(self, postData):
        EMAIL_REGEX = re.compile( r'^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$')
        errors = {}
        if (len(postData['name']) or len(postData['alias'])) < 2:
            errors['name'] = " Name and/or Alias must be at least 2 characters"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email_password'] = "Email/Password error"
        if User.objects.filter(email=postData['email']).exists():
            errors['email_password'] = "Email/Password error"
        if len(postData['password']) < 8:
            errors['email_password'] = "Email/Password error"
            if postData['password'] != postData['confirm-pw']:
                errors['email_password'] = "Email/Password error"
        return errors

    def login_validator(self, postData):
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$')
        errors = {}
        if not EMAIL_REGEX.match(postData['email']):
            errors['email_password'] = "Email/Password error"
        user = User.objects.filter(email=postData['email'])
        if not user:
            errors['email_password'] = "Login error"
        else:
            if user:
                logged_user = user[0]
                if bcrypt.checkpw(postData['password'].encode(), logged_user.password.encode()) == False:
                    errors['email_password'] = "Login error"
        return errors

class BookManager(models.Manager):
    def book_validator(self, postData):
        errors = {}
        if not len(postData['title']):
            errors['title'] = "Title is required"
            if Book.objects.filter(email=postData['title']).exists():
                errors['title'] = "Title already exists"
        if len(postData['review']) < 5:
            errors['review'] = "Description must be at least 5 characters"
        return errors

class User(models.Model):
    name = models.CharField(max_length=50)
    alias = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=50)
    review = models.ManyToManyField(User, related_name="reviewed_books")
    uploaded_by = models.ForeignKey(User, related_name="uploaded_book", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()
