# Fancy Cars
---
## About
*****
```
This is a simple application that shows a list of 10 "Fancy Cars" 
retreived from a mock database that can be sorted based on the "name" or "availability". 
Depending on the "availability" of the car the button to buy it will be enabled 
or disabled.

Link: https://dilraj-fancy-cars.herokuapp.com/

This project demonstrates my skills in 
- React Redux-Thunk 
- Express.js/Node.js

At this time this application has not yet been deployed but should be
by the end of November! In the mean time feel free to install it.
- Runs on localhost:3000
- Server on localhost:5000 by default.

```
## Screenshot
---
![Screenshot of car](https://raw.githubusercontent.com/dilrajsingh/FancyCars/master/screenshot.jpg)

## Local Installation Instructions
---
```
1. npm install
2. npm run clientSetup
3. npm run dev

ALTERNATIVELY:
1. npm install
2. cd client/
3. npm install
4. cd ..
5. npm run dev
```

## Routes
---
| Method  | URL | Purpose |
| ------------- |------------- |------------- |
| GET  | /api/availability?id=1  |Returns availability based on car id|
| GET  | /api/cars  |Returns all of the information regarding every car in the mock database. |