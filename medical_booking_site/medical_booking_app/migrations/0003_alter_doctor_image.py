# Generated by Django 4.2 on 2024-12-23 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medical_booking_app', '0002_customuser_is_superuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='doctor_images/'),
        ),
    ]
