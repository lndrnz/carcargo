# CarCar

Team:

* Person 1 - Lander - Service
* Person 2 - Joel - Sales

# Steps
x Read through all documentation
x Create plan on readme
x Create excalidraw for project
x Document each microservice
x Create inventory react pages
x Review and choose microservice for each person
- Complete microservices

## Design
- Refer to screenshot on gitlab for bounded context drawing
- Integration - both the Service and Sales microservices rely on pulling the Automobile list from the Inventory microservice. We use polling in order to achieve this, and store the retrieved Automobiles in a value object model called AutomobileVO. This data is used in the SalesRecord model in the Sales microservice and in the ServiceAppointment model in the Service microservice.

## Service microservice
- Models:
-- Technician
--- Fields: Name, Employee Number
-- Service Appointment
--- Fields: Vehicle VIN, Customer Name, Appointment Date, Appointment Time, Assigned Technician (Foreign Key), Service Reason
-- AutomobileVO
--- Fields: VIN, 
- React
-- Create a technician form
-- Create a service appointment form
-- List of all service appointments
--- VIN, Customer Name, Date, Time, Assigned Tech Name, Service Reason
-- List of all service history for a specific VIN
--- Search bar to search for specific VIN
--- VIN, Customer Name, Date, Time, Tech Name, Reason
- Nav Bar
-- Link to create new service technician
-- Link to create new service appointment
-- Link to list of service appointments
-- Link to list of service history for a VIN

## Sales microservice
x- Models:
x-- Sales Person
x--- Fields: Name, Employee Number
x-- Customer
x--- Fields: Name, Address, Phone Number
x-- Sales Record
x--- Fields: Automobile (Foreign Key), Sales Person (Foreign Key), Customer (Foreign Key), Sale Price
x-- AutomobileVO
x--- Fields: VIN,
x- Views
x-- Get/add/update/delete sales person
x-- Get/add/update/delete customer
x-- Get/add/update/delete sales record
x- React
x-- Create sales person form
x-- Create new customer form
x-- Create new sales record form
x-- List of all sales
x--- Sales Person's Name, Employee Number, Purchaser Name, Automobile VIN, and Sale Price
x-- Sales Person's sale history
x--- Dropdown to search for the sales person
x--- Show Sales Person Name, Customer Name, VIN, and Sale Price
x- Nav Bar:
x-- Link to create a new sales person
x-- Link to create a new customer
x-- Link to create a new sales record
x-- Link to list of all sales
x-- Link to sales person history list
