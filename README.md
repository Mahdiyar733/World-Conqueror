World Conqueror Web App
Simple web app that allows users to keep track of the places they've visited. Built to highlight routing, the react context API as well as the leaflet library.
You can use this project by start Json server for use city list database.

Getting Started
Run npm install or bun install to install all needed dependencies.

$ npm install
The API is simulated by a JSON file in the data folder running on json-server. The --delay flag is set to 500 milliseconds to simulate latency so the loading components have time to render. This can be changed inside package.json.

$ npm run server

# on another terminal instance
$ npm run dev
