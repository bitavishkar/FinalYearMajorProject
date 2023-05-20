import json
from .ml_model import deblurimage
from .serializers import PostSerializer, UserSerializer
from rest_framework import viewsets
from .models import Post
from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .utils import BASE_DIR

MEDIA_ROOT = BASE_DIR / 'media/'


# Create your views here.


class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UploadImage(APIView):
    def post(self, request):
        request_serializer_data = PostSerializer(data=request.data)
        if request_serializer_data.is_valid():
            # print("Serializer data is valid")
            request_serializer_data.save()
            # image_path = str(MEDIA_ROOT) + "/incoming_blurred_images/"
            # image_path_to_save = str(MEDIA_ROOT) + "/outgoing_de_blurred_images/"

            image_path = request_serializer_data.data['image']
            deblurimage(image_path)
            return Response(request_serializer_data.data, status.HTTP_201_CREATED)
        return Response({'response': request_serializer_data.errors}, status.HTTP_400_BAD_REQUEST)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
