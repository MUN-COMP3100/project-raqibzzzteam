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

<br/>
<br/> 

# Server Side
## Instantiating the server
<br/>

### Recreating Database on Local Machine
1. open mongodb compass
2. connect to local host mongodb://localhost:27017
3. create a database titled "restaurant"
4. create collection titled "stjohns"
5. import csv file titled "restaurant.csv" into collection "restaurant"
6. create collection titled "users"
7. import csv file titled "users.csv" into collection "users"

<br/>

### Implementation Description
note: ensure port:3000 is available

1. download repo github.com/MUN-COMP3100/project-raqibzzzteam
2. locate to Server Side/Restaurant Server/ 
3. open terminal here
4. command node app.js
5. server should start
Connected successfully to mongoDB
Example app listening at http://localhost:3000  

6. To shut down the server, ctrl+c in terminal
<br/>
 
## Feature Descriptions
1. name of the feature
2. A one or two sentence description of the feature. You may refer to (and possibly update) a section of the proposal for this component.
3. A brief description of the implementation strategy for the feature, including tools and imported packages and modules used
4. A statement of which other features or project modules (storage, etc) this feature uses or depends on.
5. A brief indication of the state of the implementation for the feature. Is it complete, how much is working?
6. A description of how to test the feature. Test code should be provided to test both working and failure modes of the feature from the client-side. Also indicate whether the test code is working properly and what the marker should see upon running the test code. You are encouraged to use a test framework (Mocha) for this part.




|Name|Description|Implementation Strategy|Dependencies|Completion Status|Description of tests|
|-----|-----|-----|-----|-----|-----|
|Search by mood|This feature allows users to search for a restaurant based on their current mood, and the web app will suggest a restaurant based on its tags and users' previous reviews|The implementation strategy for this feature is to use a dropdown menu on the homepage where users can select their current mood. On the backend, the Express framework will handle the HTTP GET request from the client and search the database for the restaurant that has the most matching tags to the selected mood. The mongodb package will be used to interact with the database|This feature depends on the restaurant database module which stores all restaurant data|The implementation of this feature is complete|
|Search by name|This feature allows users to search for a restaurant by its name|The implementation strategy for this feature is to use a search bar on the homepage of the web app where users can type in the name of the restaurant they are looking for. On the backend, the Express framework will handle the HTTP GET request from the client and search the database for the restaurant with the given name. The mongodb package will be used to interact with the database|This feature depends on the restaurant database module which stores all restaurant data|The implementation of this feature is complete|
|Search by cuisine|This feature allows users to search for restaurants based on their cuisine type, such as Italian, Chinese, or Mexican. Each restaurant will be assigned a cuisine type by the database admin|The restaurant database will include a field for cuisine type, which will be assigned to each restaurant by the database admin. When a user searches by cuisine, the server will query the database for all restaurants with the requested cuisine type(s). The implementation will require the use of a database (e.g. MongoDB)|This feature depends on the restaurant database and the ability to search the database by cuisine type|Implemented solution|
|Search by rating|The Search by Rating feature allows users to search for restaurants based on their rating, which can help them find highly rated restaurants quickly and easily|The implementation strategy for this feature involves adding a search bar or filter to the user interface that allows users to input a rating range or select a rating range from a dropdown menu. This search will trigger a query to the database, which will return a list of restaurants that fall within the specified rating range|This feature depends on the database module, as it requires access to the restaurant data and ratings stored in the database||




