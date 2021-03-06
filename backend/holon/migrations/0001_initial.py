# Generated by Django 4.0.5 on 2022-07-04 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UpdateRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='The name of the user', max_length=256)),
                ('email', models.EmailField(help_text='The email of the user', max_length=256)),
                ('company', models.CharField(blank=True, help_text='The company of the user', max_length=256, null=True)),
                ('rating', models.CharField(blank=True, choices=[('HEART', 'heart'), ('THUMBSUP', 'thumbsup'), ('NEUTRAL', 'neutral'), ('THUMBSDOWN', 'thumbsdown')], max_length=20, null=True)),
            ],
        ),
    ]
