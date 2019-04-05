# Techdegree Project Twelve
## vidNote 2.0

This project is an improved way of sharing noteworthy moments from Youtube videos.

## Technologies Used

- ### Backend - Node.js & Express
- ### Frontend - Custom CSS + Bootstrap & React
- ### Database - Document based: MongoDB
- ### Heroku - Used to deploy the web app

## APIs Used

- ### YouTube (api key required)
  This project uses YouTube's Iframe Player and Data API.

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

### Run the following commands in the root of the project directory

Install all the dependencies
```
npm install-all
```

Create a .env file
```
touch .env
```

Inside the .env file
```
SESSION_SECRET=Replace-This
REACT_APP_YOUTUBE_API_KEY=Replace-This
```

### Back in the route directory

Start the app
```
npm start
```

To view the app
```
React will automatically open a new tab in your browser at localhost:3000
```

### How to get a YouTube Developer API key

Visit [YouTube's API docs](https://developers.google.com/youtube/v3/getting-started) for how to get the api key.