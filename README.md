# Techdegree Project Twelve
## vidNote 2.0

This project is an improved way of sharing noteworthy moments from Youtube videos.

## Technologies Used

- ### Backend - Node.js & Express
- ### Frontend - Custom CSS + Bootstrap & React
- ### Database - Document based: MongoDB
- ### Heroku - Used to deploy the web app

## APIs Used

- ### YouTube
  This project uses YouTube's Iframe Player and Data API.

- ### Twitter Login
  This project uses Twitter's API to login.

- ### Facebook Login
  This project uses Facebook's API to login.

### Be sure to have Node.js & MongoDB installed on your machine

## How to get up and running locally

Clone the repo from github
```
git clone https://github.com/mosesfinlay/vidnote-2.0.git
```

Move into the project directory
```
cd vidnote-2.0
```

### Run the following commands in the root of the project directory

Install main project dependencies
```
npm install
```

Install frontend dependencies
```
npm run install-client
```

Create a .env file
```
touch .env
```

Inside the .env file
```
SESSION_SECRET=Replace-This
REACT_APP_YOUTUBE_API_KEY=Replace-This
TWITTER_CONSUMER_KEY=Replace-This
TWITTER_CONSUMER_SECRET=Replace-This
FACEBOOK_APP_ID=Replace-This
FACEBOOK_APP_SECRET=Replace-This
```

### In a new terminal tab

Before running the app be sure start MongoDB
```
mongod
```

### Back in the previous terminal tab

Start the app
```
npm start
```

To view the app: Running `npm start` will run the project on `port:5000` and build the frontend of the app. After the React build process has completed visit port `5000` in your browser.

#### Note: When using the login feature with Twitter be sure that the URL is 127.0.0.1:5000 and not localhost:5000. 

#### When using the login feature with Facebook be sure that the URL is localhost:5000 and not 127.0.0.1:5000

## How to test

Run the test script
```
npm test
```

## How to get a your developer keys

### YouTube Data API key:

Visit [YouTube's API docs](https://developers.google.com/youtube/v3/getting-started) for how to get the api key.

### Twitter consumer key and consumer secret:

Head over to [Twitter's Developer Platform](https://developer.twitter.com/) and create a new app.

### Facebook app id and app secret:

Create a new app on [Facebook's Developer Platform](https://developers.facebook.com/).