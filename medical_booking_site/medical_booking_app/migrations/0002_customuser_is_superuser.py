# Generated by Django 4.2 on 2024-12-20 00:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medical_booking_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]
