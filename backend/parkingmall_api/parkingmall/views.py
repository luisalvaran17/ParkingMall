# todos/views.py
from rest_framework import generics

# from .models import Todo
# from .serializers import TodoSerializer


# class ListTodo(generics.ListCreateAPIView):
    # queryset = Todo.objects.all()
    # serializer_class = TodoSerializer


# class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    # queryset = Todo.objects.all()
    # serializer_class = TodoSerializer

#######################################################
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer