# Youtube Link To Demo: 
 [WANDERER]( https://youtu.be/Nq00RQAPJc4 )
  
  For running this project in local kindly refer installation section.

# Problem statement: 

* There are very few flights and hotel aggregators which provide the users with a unique platform to find the best prices throughout the year. It is important to provide a personalized experience based on the user’s need.

* A lot of websites need a firm separation between the entities on board. Many websites provide ambiguity to the users in terms of the service and can receive complaints from the vendors and the clients.

* It is important to have an unbiased system considering most of the services provided will be from third party entities which are dependent on the platform.

## Online booking platforms come with multiple challenges for both the client and the vendor, these are :
### Slot management:
This occurs when a vendor cannot accept bookings on certain dates for multiple reasons.

### Price Per Booking: Time Slot Management:
In order to have a flexible price for each booking, the online booking system should be capable enough to show a different slot price of the same booking product on different dates.

### Handle Customer Complaints:
It is necessary to collect feedback from the vendor and the client about each other and the platform, this helps the domain entities solve the existing discrepancies constructively.

# Proposed solution:
The platform proposed here provides a firm demarcation between the domain entities. This platform aggregates airline and hotel prices separately. The customer and the vendor are treated as equal and are both provided with the same services. 

This platform has two concepts of commerce Airline Ticketing and Hotel Booking. To solve the issues listed above the platform shall have the following features:

### ADMIN:
* The ADMIN user can perform CRUD operation on all the available domain objects and users. An ADMIN Can:
1. On-board a user.
2. On-board a vendor.
3. Off-board a vendor.
4. Off-board a user.
5. Delete a user.
6. Delete a vendor.

### Flight Vendor:
* The Flight Vendor user can perform CRUD operation on its details. An vendor Can:
1. Register himself on website.
2. Add a flight.
3. Update flight.

### Hotel Vendor:
* The Hotel Vendor user can perform CRUD operation on its details. An vendor can:
1. Register himself on website.
2. Add a hotel.
3. Update hotel.

### Customer/User:
* The Hotel Vendor user can perform CRUD operation on its details. An vendor can:
1. Browse website.
2. Search for a hotel.
3. Search for a flight.
4. Book a hotel.
5. Book a flight.
6. CRUD his/her profile.
7. View his/her orders. 

### Guest:
* The Hotel Vendor user can perform CRUD operation on its details. An vendor can:
1. Browse website.
2. Search for a hotel.
3. Search for a flight.

### Slot management:
* Each Vendor will have the option to block certain dates for some or all of their services due to multiple reasons. Ex: Block Hotel Suite bookings for Christmas dates for a room renovation.

### Price Per Booking: Time Slot Management:
* Considering the fact that during certain periods there is a spike in availing of service, the platform will enable dynamic prices which would help benefit the client and the vendor. For example, Red-eye flights are cheaper than Weekend peak time flights.

### Handle Customer Complaints:
* Finally, this platform provides extremely high emphasis on the feedback received from client/vendor as this helps the platform to cover the discrepancies occurring.

## UML Diagram:
![UML](https://i.imgur.com/wtc40fv.jpg)
## Sequence Diagram:
## System To API
![SystemToAPI](https://i.imgur.com/2BqGnNL.jpg)
## Domain Objects To User
![DomainObjectsToUser](https://i.imgur.com/D8apJ9V.jpg)
## User To User
![UserToUser](https://i.imgur.com/6Cf1Dh7.jpg)
## Domain Objects
![DomainObjects](https://i.imgur.com/oQUOVbJ.jpg))

## 3 potential domain objects
1. Airlines
2. Hotels
3. Bookings

## 3 potential human users
1. Website administrator
2. Vendor
    Airline
    Hotel
    Client
3. Guest
    Member
    Corporates

## 3 goals the user could accomplish ( For each human user)
1. Member/ Corporates -: Book airline, Book Hotel, Check Orders, browse, cancel the order    
2. Web administrator-: Remove vendors, add new vendors, issue Coupons
3. Guest-: Browse, Register, 
4. Vendor-: add new airline/hotel, Increase/ decrease prices, change details.

## 2 relations with other users(For each human user):
1. Website administrator onboards Vendors.
2. Vendors provide services to Clients. 
3. Clients book tickets via Vendors.  

## 2 relations with domain objects (For each human user):
1. Member book tickets from a vendor and will have orders associated with it. 
2. Corporates member book hotel tickets from a vendor and will have orders associated with it.
3. Guest will browse airline tickets.

## 2 relations with other domain objects
1. There exists an order for an airline from a vendor.
2. There exists an order for a hotel from a vendor.


## Installation
The application is built on MERN(MongoDB, Express.js, React.js, Node.js) stack.

### Getting application up and running: 

#### Running elastic cluster:
[Follow to run elastic cluster](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-install.html)

#### Running mongo database:
[Follow to run mongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Prerequisites:
Elastic cluster should be up and running. The hosted url should be same as specified value of ELASTICSEARCH_URI in .env file.
MongoDb should be up and running. The hosted url should be same as specified value of MONGODB_URI in .env file.

1. Run ``npm install`` in root directory.
2. Run ``npm install`` in client directory.
3. Run ``npm start`` on root directory.

The application should be up and running on the browser. The server will also start in parallel.
There are several API exposed by backend for CRUD, Search and other features. The same can be tested by
importing postman collection and environment in folder testing collection.

To initialize your application with some data kindly fire up below endpoints from a client.
[Initialize all indexes with airports, flights and hotels data]({{host}}/bookingsApp/elastic/index/init/all)
[Initialize mongo database with airports, flights and hotels data]({{host}}/bookingsApp/elastic/index/init/db)

Kindly use below url to delete all indexes:
[Delete all indexes from Elastic search]({{host}}/bookingsApp/elastic/delete_all)

The API postman collection can be requested by contacting me :)
