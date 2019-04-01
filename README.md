# Techdegree Project Twelve
## vidNote 2.0

This project is an improved way of sharing noteworthy moments from Youtube videos.

## Technologies Used

- ### Backend - Node.js & Express
- ### Frontend - Custom CSS + Bootstrap & React
- ### Database - Document based: MongoDB
- ### Heroku - Used to deploy the web app

## APIs Used

- ### YouTube (no api key required)
  This project uses YouTube's API to interact with an embedded iframe.

- ### Twitter (WIP) (api key required)
  This project uses Twitter's API to login and tweet within the app.

- ### TBD
  

## How to get up and running locally

Clone the repo from github
```
git clone https://github.com/mosesfinlay/vidnote-2.0.git
```

Move into the project directory
```
cd vidnote-2.0
```

### Run the following commands in the route of the project directory

Build the app - this will install all necessary dependencies and create a "build" folder inside the "client" folder
```
npm run build
```

Create a .env file
```
touch .env
```

Inside the .env file you just created
```
SESSION_SECRET=Replace-This
TWITTER_CONSUMER_KEY=Replace-This
TWITTER_CONSUMER_SECRET=Replace-This
```

Start the app
```
npm start
```

To view the app
```
React will automatically open a new tab in your browser at localhost:3000
```

### How to get a Twitter consumer key and consumer secret

--- (WIP) ---