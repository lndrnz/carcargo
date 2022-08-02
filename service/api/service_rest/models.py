from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO (models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, null=True)
    

class Technician (models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

class ServiceAppointment (models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=100)
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    assigned_technician = models.ForeignKey(Technician, related_name="service_appointment", on_delete=models.CASCADE)
    service_reason = models.TextField()

    def get_api_url(self):
        return reverse("api_serviceapp", kwargs={"pk": self.id})

