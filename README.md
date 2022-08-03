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

## Service microservice
- Models:
x-- Technician
x--- Fields: Name, Employee Number
x-- Service Appointment
x--- Fields: Vehicle VIN (Foreign Key), Customer Name, Appointment Date, Appointment Time, Assigned Technician (Foreign Key), Service Reason
x-- AutomobileVO
x--- Fields: VIN, 
- React
x-- Create a technician form
-- Create a service appointment form
-- List of all service appointments
--- VIN, Customer Name, Date, Time, Assigned Tech Name, Service Reason
x-- List of all service history for a specific VIN
--- Search bar to search for specific VIN
--- VIN, Customer Name, Date, Time, Tech Name, Reason
- Nav Bar
x-- Link to create new service technician
x-- Link to create new service appointment
x-- Link to list of service appointments
x-- Link to list of service history for a VIN

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
- React
-- Create sales person form
-- Create new customer form
-- Create new sales record form
-- List of all sales
--- Sales Person's Name, Employee Number, Purchaser Name, Automobile VIN, and Sale Price
-- Sales Person's sale history
--- Dropdown to search for the sales person
--- Show Sales Person Name, Customer Name, VIN, and Sale Price
- Nav Bar:
-- Link to create a new sales person
-- Link to create a new customer
-- Link to create a new sales record
-- Link to list of all sales
-- Link to sales person history list
