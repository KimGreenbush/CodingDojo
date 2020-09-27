from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    desc = models.TextField()
    def __str__(self):
        return f"<{self.city} ({self.id})>"

class Ninja(models.Model):
    dojo_location = models.ForeignKey(Dojo, related_name='ninjas', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    def __str__(self):
        return f"<{self.first_name} ({self.id})>"
