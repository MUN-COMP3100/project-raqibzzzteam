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
|Explore Page|Explore the map of St. John's and find restaurants|Client|Yes|raqibmuktadir
|Google Maps|Integrate Google Map to show restaurant location on a restaurant's page|Client|Yes|raqibmuktadir
|Wishlist System|Allow users to bookmark their favorite restaurants for quick and easy access|Client|Yes|vilakshankh
|Review Restaurant|	users will be able to leave their own review of their experiences in the restaurant which will show on the restaurant page|Client|Yes|vilakshankh
|Search results|Shows the list of restaurants based on the tag (mood, cuisine, rating, name)|Client|Yes|vilakshankh|
|User Feed| Shows their user information and liked restaurants|Client|Yes|raqibmuktadir|

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


### Server Side Features

|Name|Description|Implementation Strategy|Dependencies|Completion Status|Description of tests|
|-----|-----|-----|-----|-----|-----|
|Search by mood|This feature allows users to search for a restaurant based on their current mood, and the web app will suggest a restaurant based on its tags and users' previous reviews|The implementation strategy for this feature is to use a dropdown menu on the homepage where users can select their current mood. On the backend, the Express framework will handle the HTTP GET request from the client and search the database for the restaurant that has the most matching tags to the selected mood. The mongodb package will be used to interact with the database|This feature depends on the restaurant database module which stores all restaurant data|The implementation of this feature is complete|Tests implemented but fails|
|Search by name|This feature allows users to search for a restaurant by its name|The implementation strategy for this feature is to use a search bar on the homepage of the web app where users can type in the name of the restaurant they are looking for. On the backend, the Express framework will handle the HTTP GET request from the client and search the database for the restaurant with the given name. The mongodb package will be used to interact with the database|This feature depends on the restaurant database module which stores all restaurant data|The implementation of this feature is complete|Tests implemented but fails|
|Search by cuisine|This feature allows users to search for restaurants based on their cuisine type, such as Italian, Chinese, or Mexican. Each restaurant will be assigned a cuisine type by the database admin|The restaurant database will include a field for cuisine type, which will be assigned to each restaurant by the database admin. When a user searches by cuisine, the server will query the database for all restaurants with the requested cuisine type(s). The implementation will require the use of a database (e.g. MongoDB)|This feature depends on the restaurant database and the ability to search the database by cuisine type|Implemented solution|Tests implemented but fails|
|Search by rating|The Search by Rating feature allows users to search for restaurants based on their rating, which can help them find highly rated restaurants quickly and easily|The implementation strategy for this feature involves adding a search bar or filter to the user interface that allows users to input a rating range or select a rating range from a dropdown menu. This search will trigger a query to the database, which will return a list of restaurants that fall within the specified rating range|This feature depends on the database module, as it requires access to the restaurant data and ratings stored in the database|Solution has been implemented|Tests implemented but fails|
|User Registration|allows new user accounts to be made on the web program|Implementation for this feature followed making a dummy database storing fake users. We made users.js and users.mjs in order for the database to be able to connect to the local server. This feature uses db.js file to allow the user.js file to access the database from mongodb|Will be implemented on the client side of the program|The implementation of this feature is complete|Tests implemented but fails|
|Login|User credential verification|This feature depends on the database module. It is using users.js and users.mjs. The implementation of this feature involves checking if a user has it's corresponding password in the database of users| Implementation is complete|The implementation of this feature is complete|Tests implemented but fails|

### Client Side Features

|Name|Description|Implementation Strategy|Dependencies|Completion Status|
|-----|-----|-----|-----|-----|
|Explore Page|This feature allows a user to explore through a map and have a look at the list of restaurants we have on our site. The user will be able to individually visit each restaurant's webpage and learn more about the place|In order to implement this feature, a page was created that shows the user a map of the city of St. John's that they can navigate through. The map also links to external websites such as google reviews and etc. Beside the map, a table has been placed that is connected to our database that contains all the records of the restaurants in our system. Every restaurant has its own individual page with additional information from our server including the type of cuisine, rating, location or mood of the place. These individual pages also have the restaurant's map along with some reviews of the restaurant that exist on our database.|This feature depends on the embedded google map frames into the page, it depends on the restaurants database along with the reviews database as well.|This feature has been fully completed and implemented.|
|Google Maps|This feature allows the user to view the location of the restaurant on a map along with external links that allows access to the Google Places feature on multiple pages starting from the explore page and the individual restaurant pages|In order to implement this feature a frame of the map of the place that is being shown has been embedded onto the different pages|This feature depends on the Google Maps API that we have included in the project.|The feature has been fully completed and is functional|
|Search Results|This feature allows the user to search from the restaurants in our server by using multiple filters which are mood, cuisine, rating and the name of the restaurants.|In order to implement this feature and make it easier for the user, we have created seperate pages for each of the different tags of searches. For eg. there is a seperate page for Search by Cuisine, a different page for Search by Mood and etc|This feature heavily depends on the database to return data according to the filters and searches, the user provides and makes.|The feature has been fully completed and is functional|
|User Feed|This shows the user their account information such as their email and date of birth that is stored in our database. In addition, the user is able to like restaurants from the entire list of restaurants that is in our database.|In order to implement this feature we had to make sure that the login worked on the server side and that it connected to the client side. It also requires user sign up to input information into the users database.|This feature entirely depends on the server and the database on the server side in addition to relying on the login credential verification system.|This feature is mostly complete. The user page is available for the users to view upon a successful login but the ability to sign up is still not complete due to the constraint of time. There are model users on the database who's information can be used to sign in to the program and view their user feeds.|



