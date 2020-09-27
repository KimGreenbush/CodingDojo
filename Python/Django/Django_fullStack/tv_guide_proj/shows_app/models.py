from django.db import models
from time import strftime, localtime, strptime, time
from datetime import date, datetime

class ShowManager(models.Manager):
    def basic_validator(self,postData):
        print(postData)
        errors = {}
        if len(postData['show_title']) < 2:
            errors['title'] = 'Title must be at least 2 characters.'
        else:
            if Show.objects.filter(title=postData['show_title']).exists():
                errors['title'] = 'Title already exists.'
            if Show.objects.filter(id=postData['show_id']).exists():
                errors = {}
        if len(postData['network']) < 3:
            errors['network'] = 'Network must be at least 3 characters.'
        if len(postData['desc']) < 10 and len(postData['desc']) > 0:
            errors['desc'] = 'Description must be at least 10 characters.'
        if len(postData['release_date']) < 1:
            errors['release_date'] = 'Release date required.'
        if postData['release_date']:
            new_release = datetime.strptime(postData['release_date'], '%Y-%m-%d')
            if new_release > datetime.today():
                errors['release_date'] = 'Release date must be a past date.'
        return errors

class Show(models.Model):
    title = models.CharField(max_length=50)
    network = models.CharField(max_length=20)
    description = models.TextField()
    release_date = models.DateField(0000-00-00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
    def __str__(self):
        return f"<{self.title} ({self.id})>"