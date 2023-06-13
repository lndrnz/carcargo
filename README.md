# CarCarGo
![HomePage](Images/Screenshot%202.jpeg)
![Inventory](Images/Screensho%203.jpeg)
![ServiceHistory](Images/Screenshot%201.jpeg)


## Summary
A Full Stack utility application that allows car dealership employees to log sales, car services, assign technicians, and access car history using the VIN Number of the vehicle.

---
## Team
Joel Swanson - Sales

Lander Nunez - Service

## Deployment (Docker Required)
To run the project, clone the repository and cd into the root directory. Then open the terminal and run these commands in the following order.
```
docker volume create beta-data

docker compose build

docker compose up
```

All the containers should be running and the access point of the app should be on a web browser at http://localhost:3000/

## Tutorial
For creating a service appointment, the date should be in this format: YYYY-MM-DD and the time should be in this format: HH:MM:SS

For optimal UX/UI experience, the links for "Create" pages with some entities are located within the entity list page on buttons.

For example, to create an Automobile, go to the Automobile List link and click the "Create an automobile" button.

List of entities with the create link on their list page:
* Manufacturers, Vehicles, Automobiles, Service Appointments, Sales Records
---
## System Design Information
![Exalidraw](Images/bounded%20context%20drawing.png)
### Integration
Both the Service and Sales microservices rely on pulling the Automobile list from the Inventory microservice. We use polling in order to achieve this, and store the retrieved Automobiles in a value object model called AutomobileVO. This data is used in the SalesRecord model in the Sales microservice and in the ServiceAppointment model in the Service microservice.

---
## Service Microservice Checklist (Lander)
- [x] Models:
- [x] Technician
- [x] Fields: Name, Employee Number
- [x] Service Appointment
- [x] Fields:
  * Vehicle VIN
  * Customer Name
  * Appointment Date
  * Appointment Time
  * Assigned Technician
  * (Foreign Key)
  * Service Reason
- [x] AutomobileVO
- [x] Fields: VIN 
- [x] Views
- [x] Get/add/update/create technician
- [x] Get/add/update/create service appointment
- [x] React
- [x] Create a technician form
- [x] Create a service appointment form
- [x] List of all service appointments:
  *  VIN
  *  Customer Name
  *  Date/Time
  *  Assigned Tech Name
  *  Service Reason
- [x] List of all service history for a specific VIN
- [x] Search bar to search for specific VIN
- [x] VIN, Customer Name, Date, Time, Tech Name, Reason
- [x] Poller
- [x] Retrieve automobiles from inventory using poller
- [x] Nav Bar
- [x] Link to create new service technician
- [x] Link to create new service appointment
- [x] Link to list of service appointments
- [x] Link to list of service history for a VIN
---
## Sales Microservice Checklist (Joel)
- [x] Models:
- [x] Sales Person
- [x] Fields: Name, Employee Number
- [x] Customer
- [x] Fields: Name, Address, Phone Number
- [x] Sales Record
- [x] Fields:
  * Automobile (Foreign Key)
  * Sales Person (Foreign Key)
  * Customer (Foreign Key)
  * Sale Price
- [x] AutomobileVO
- [x] Fields: VIN
- [x] Views
- [x] Get/add/update/delete sales person
- [x] Get/add/update/delete customer
- [x] Get/add/update/delete sales record
- [x] React
- [x] Create sales person form
- [x] Create new customer form
- [x] Create new sales record form
- [x] List of all sales:
  * Sales Person's Name
  * Employee Number
  * Purchaser Name
  * Automobile VIN
  * Sale Price
- [x] Sales Person's sale history
- [x] Dropdown to search for the sales person
- [x] Show Sales Person Name, Customer Name, VIN, and Sale Price
- [x] Poller
- [x] Retrieve automobiles from inventory using poller
- [x] Nav Bar:
- [x] Link to create a new sales person
- [x] Link to create a new customer
- [x] Link to create a new sales record
- [x] Link to list of all sales
- [x] Link to sales person history list
