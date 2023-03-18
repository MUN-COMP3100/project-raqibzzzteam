## Team Raqib-Vilakshan


Team name: raqibzzzTeam
Team member 1: Abdullah Raqib Muktadir, MUNID: armuktadir, GITHUB: raqibmuktadir  
Team member 2: Vilakshan Khanna, MUNID: vkhanna, GITHUB: vilakshankh

Project: PlateSpot
* There's been one too many times where you did not know where to go get food here in St. John's which is why we propose a small web application where users are able to view all their eating options in the city of St. John's based on only a few filters. Mood, rating, and cuisine type. Every Restaurant will have its own informations page where its location, menu, reviews and etc. will be displayed.

## Project Feature Table

### Server Side (Yes)
|Name|Description|End|Deliver|Who|
|-----|-----|-----|-----|-----|
|User Registration|allows new user accounts to be made on the web program|Server|Yes|raqibmuktadir
|Login|User credential verification|Server|Yes|raqibmuktadir
|Search by Name|Search restaurant according to name|Server|Yes|raqibmuktadir
|Search by Mood|Search for restaurants by your mood (each restaurant tagged)|Server|Yes|vilakshankh
|Search by Cuisine|Search for restaurants by cuisine|Server|Yes|raqibmuktadir
|Search by Rating|Search for restaurants Google rating|Server|Yes|vilakshankh
|Database Management|Store and manage all the information about restaurants, including menu, location, reviews, and more|Server|Yes|vilakshankh
|File Uploading|Allows uploading pictures with reviews of restaurants or even adding pictures to a restaurant's gallery|Server|Yes|vilakshankh

### Server Side (No/Maybe)
|Name|Description|End|Deliver|Who|
|-----|-----|-----|-----|-----|
|Map|A page that has a map with all the restaurants in our database|Server|No/Maybe|vilakshankh
|Email Integration|Add the ability for users to receive email notifications or send emails from your application using NodeMailer|Server|No/Maybe|raqibmuktadir|


### Client Side (Yes)
|Name|Description|End|Deliver|Who|
|-----|-----|-----|-----|-----|
|Discussions Page|Discuss with locals about the best places to eat at|Client|Yes|vilakshankh
|Google Maps|Integrate Google Map to show restaurant location on a restaurant's page|Client|Yes|vilakshankh
|Wishlist System|Allow users to bookmark their favorite restaurants for quick and easy access|Client|Yes|raqibmuktadir
|Review Restaurant|	users will be able to leave their own review of their experiences in the restaurant which will show on the restaurant page|Client|Yes|raqibmuktadir|

### Client Side (No/Maybe)
|Name|Description|End|Deliver|Who|
|-----|-----|-----|-----|-----|
|Age Restriction|Users below the age of majority will not have access to bars|Client|No/Maybe|vilakshankh





#Instantiating the server


##Recreating Database on Local Machine
1. open mongodb compass
2. connect to local host mongodb://localhost:27017
3. create a database titled "restaurant"
4. create collection titled "stjohns"
5. import csv file titled "restaurant.csv" into collection "restaurant"
6. create collection titled "users"
7. import csv file titled "users.csv" into collection "users"


##Implementation Description
note: ensure port:3000 is available

1. download repo github.com/MUN-COMP3100/project-raqibzzzteam
2. locate to Server Side/Restaurant Server/ 
3. open terminal here
4. command node app.js
5. server should start
Connected successfully to mongoDB
Example app listening at http://localhost:3000  

6. To shut down the server, ctrl+c in terminal


