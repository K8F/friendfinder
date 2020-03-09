# Friend Finder Application

## Description

Friend Finder will help you find your companion based on your response to a short survey. Each question includes values on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree). When the user submits their response, the application checks all other users on the server and returns the name and photo of the closest match.

Friend Finder is deployed on Heroku: [https://still-stream-25287.herokuapp.com/](https://still-stream-25287.herokuapp.com/). 


## How It Works

Friend Finder is implemented using Node.js and Express Server on the backend and JQuery and Bootstrap on the front end. 

There are two main html files:  `home.html` is the app landing page and `survey.html` takes you to the survey form. 

There are also two route files for the server: `htmlRoutes.js` displays the homepage and survey based on the URL request; `apiRoutes.js` sends and receives requests from the client and server. 

When a new user submits their response, their data is saved to the server's JSON object. The app chooses a user's match by looping through each object, and their responses, and calculating the lowest aboslute difference for all 10 questions combined. 


## Known Issues

Currently, there are known issues. The app could be further improved with more styling. 

## Contributors

Kate Foust

