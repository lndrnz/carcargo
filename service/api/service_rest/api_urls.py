from django.urls import path

from .api_views import (
    api_technician,
    api_technicians,
    api_serviceapp,
    api_serviceapps,
    api_getsearchhistory,
)
    

urlpatterns = [
    path("technician/", api_technicians, name="api_technicians"),
    path("technician/<int:pk>/", api_technician, name="api_technician"),
    path("serviceapps/", api_serviceapps, name="api_serviceapps"),
    path("serviceapps/<int:pk>/", api_serviceapp, name="api_serviceapps"),
    path("serviceapps/<str:vin>/", api_getsearchhistory, name="api_searchhistory")

]