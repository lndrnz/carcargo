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
x Complete microservices

## Design
- Running the Project
-- To run the project, cd into the directory then do "docker-compose build" then "docker-compose up".
-- For creating a service appointment, the date should be in this format: YYYY-MM-DD and the time should be in this format: HH:MM:SS
-- To save space in the navigation, the links to the "create" pages for some entities are located within the entity list page on buttons. For example, to create an Automobile, go to the Automobile List link and click the "Create an automobile" button.
--- List of entities with the create link on their list page:
---- Manufacturers, Vehicles, Automobiles, Service Appointments, Sales Records
- Design Information
-- Refer to our excalidraw screenshot for how we defined our designs with respect to our Entities and Bounded Contexts. Located within same folder level as the README file.
--- Filename: bounded context drawing.png
-- Integration - both the Service and Sales microservices rely on pulling the Automobile list from the Inventory microservice. We use polling in order to achieve this, and store the retrieved Automobiles in a value object model called AutomobileVO. This data is used in the SalesRecord model in the Sales microservice and in the ServiceAppointment model in the Service microservice.


## Service microservice
x- Models:
x-- Technician
x--- Fields: Name, Employee Number
x-- Service Appointment
x--- Fields: Vehicle VIN, Customer Name, Appointment Date, Appointment Time, Assigned Technician (Foreign Key), Service Reason
x-- AutomobileVO
x--- Fields: VIN, 
x- Views
x-- Get/add/update/create technician
x-- Get/add/update/create service appointment
x- React
x-- Create a technician form
x-- Create a service appointment form
x-- List of all service appointments
x-- VIN, Customer Name, Date, Time, Assigned Tech Name, Service Reason
x-- List of all service history for a specific VIN
x--- Search bar to search for specific VIN
x--- VIN, Customer Name, Date, Time, Tech Name, Reason
x- Poller
x-- Retrieve automobiles from inventory using poller
x- Nav Bar
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
x- React
x-- Create sales person form
x-- Create new customer form
x-- Create new sales record form
x-- List of all sales
x--- Sales Person's Name, Employee Number, Purchaser Name, Automobile VIN, and Sale Price
x-- Sales Person's sale history
x--- Dropdown to search for the sales person
x--- Show Sales Person Name, Customer Name, VIN, and Sale Price
x- Poller
x-- Retrieve automobiles from inventory using poller
x- Nav Bar:
x-- Link to create a new sales person
x-- Link to create a new customer
x-- Link to create a new sales record
x-- Link to list of all sales
x-- Link to sales person history list
