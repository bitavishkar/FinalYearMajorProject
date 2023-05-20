from django.db import models


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='incoming_blurred_images')

    def __str__(self):
        return self.title
