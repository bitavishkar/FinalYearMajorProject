from django.urls import path, include
from .views import PostView, PostViewSet, UserViewSet, UploadImage

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet, basename='posts')
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    # path('posts', PostView.as_view(), name= 'posts_list'),
    path('upload_image/', UploadImage.as_view())
]
