# Generated by Django 4.0.3 on 2022-08-02 06:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_automobilevo_sold'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='sold',
        ),
    ]