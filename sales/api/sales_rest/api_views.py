from common.json import ModelEncoder
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Create your views here.

# Sales Person

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]

@require_http_methods(["GET", "POST"])
def api_sales_persons(request):
    if request.method == "GET":
        people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": people},
            encoder=SalesPersonEncoder,
        )
    else: # POST
        try:
            content = json.loads(request.body)
            person = SalesPerson.objects.create(**content)
            return JsonResponse(
                person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the sales person"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_person(request, pk):
    if request.method == "GET":
        try:
            person = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            person = SalesPerson.objects.get(id=pk)
            person.delete()
            return JsonResponse(
                person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            person = SalesPerson.objects.get(id=pk)

            props = ["name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(person, prop, content[prop])
            person.save()
            return JsonResponse(
                person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

# Customers

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        people = Customer.objects.all()
        return JsonResponse(
            {"customers": people},
            encoder=CustomerEncoder,
        )
    else: # POST
        try:
            content = json.loads(request.body)
            person = Customer.objects.create(**content)
            return JsonResponse(
                person,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, pk):
    if request.method == "GET":
        try:
            person = Customer.objects.get(id=pk)
            return JsonResponse(
                person,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            person = Customer.objects.get(id=pk)
            person.delete()
            return JsonResponse(
                person,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            person = Customer.objects.get(id=pk)

            props = ["name", "address", "phone_number"]
            for prop in props:
                if prop in content:
                    setattr(person, prop, content[prop])
            person.save()
            return JsonResponse(
                person,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

# Sales Records

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["id", "vin", "import_href"]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "automobile",
        "sales_person",
        "customer",
        "sale_price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_sales_records(request):
    if request.method == "GET":
        records = SalesRecord.objects.all()
        print(records)
        return JsonResponse(
            {"sales_records": records},
            encoder=SalesRecordEncoder,
        )
    else: # POST
        try:
            content = json.loads(request.body)

            automobile_id = content["automobile_id"]
            automobile = AutomobileVO.objects.get(id=automobile_id)
            content["automobile"] = automobile

            sales_person_id = content["sales_person_id"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person

            customer_id = content["customer_id"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

            record = SalesRecord.objects.create(**content)
            return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the sales record"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_record(request, pk):
    if request.method == "GET":
        try:
            record = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            record = SalesRecord.objects.get(id=pk)
            record.delete()
            return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            record = SalesRecord.objects.get(id=pk)

            props = ["sale_price"]
            for prop in props:
                if prop in content:
                    setattr(record, prop, content[prop])
            record.save()
            return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response