# Generated by Django 3.1.1 on 2020-09-12 06:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shows_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='show',
            old_name='released_date',
            new_name='release_date',
        ),
    ]
