from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO (models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, null=True)

    class Meta:
        ordering = ("vin",)

class SalesPerson (models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_sales_person", kwargs={"pk": self.id})

    class Meta:
        ordering = ("name", "employee_number",)

class Customer (models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    phone_number = models.CharField(max_length=10)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})

    class Meta:
        ordering = ("name",)

class SalesRecord (models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="sales_records", on_delete=models.CASCADE)
    sales_person = models.ForeignKey(SalesPerson, related_name="sales_records", on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, related_name="sales_records", on_delete=models.CASCADE)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2)

    def get_api_url(self):
        return reverse("api_sales_record", kwargs={"pk": self.id})

    class Meta:
        ordering = ("sales_person", "customer", "sale_price",)