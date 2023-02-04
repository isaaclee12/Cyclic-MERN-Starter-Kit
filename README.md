# Cyclic-MERN-Starter-Kit
A demo repo with the deployment setup/basic architecture of a robust full-stack application. Good template for starting a MERN project!

# Credits
- Repo contributed by <a href="https://github.com/isaaclee12/">Isaac Lee</a>
- Infrastructure based on <a href="https://github.com/Caleb-Cohen/Together">Together</a>, created by <a href="https://leonnoel.com/100devs/">#100Devs</a>
- Credit to <a href="https://github.com/RascalTwo">Rascal_Two</a> for help with Cyclic deployment

# Roadmap:
- Remove: (Morgan, Discord Auth, Passport, Jest/Testing, ESlint, prettier, multer, maybe express-flash?, and also maybe nanoid?, go through packages one by one and see what we really need...)
- Implement Update functionality for the "Example" Object.
- Change imports in backend/server to match syntax in front end (import statements)
- Delete artifacts from original Together project (e.g. events.js, etc)
- Have certain features only appear if authorized.
- Ask Rachel about "repo" vs "template" on GitHub.
- Change discord server id to Cyclic's server in the backend
- Change feature 2 button for distinction + make it colorblind friendly.
- Clean up all TODOs
- Once done, let Rachel know


# Tech Used:
- React
- Tailwind CSS
- Express
- Mongoose
- MongoDB
- Passport
- Discord Authentication


# About the App (How it Works)
*This section is in progress*
- React/Node:
    - npm/package.json
    - Routing (react-router-dom)
    - useState & useEffect
    - useContext
    - axios (apiService.js)

- Express:
    - Routes
    - Models
    - Controllers
    - Passport
    - Mongoose

- MongoDB:

- OAuth:

## Tools, Accounts & Downloads
- <a href="https://github.com/join" target="_blank">GitHub account</a>
- Git installed and setup. Guide for [Mac](https://www.youtube.com/watch?v=hMEyBtsuAJE) & [Windows](https://www.youtube.com/watch?v=2j7fD92g-gE)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Discord](https://discord.com/) & Joined [100 Devs](https://discord.gg/100devs)
- [Compass **(Recommended)**](https://www.mongodb.com/products/compass) or similar MongoDB GUI if using `mongodb://127.0.0.1:27017/` as your DB_STRING
- [MongoDB Account: **(Optional)**](https://www.mongodb.com/) Only required if not using Compass. You will need to change your DB_STRING `mongodb://127.0.0.1:27017/` as your DB_STRING (see [below](#env-template-setup))
- [NodeJS](https://nodejs.org/en/download/)

# Local Initialization
### Installation
- Clone the repo
- Run ```npm ci``` in the root folder to install the server dependencies.
- Run ```cd client``` then run ```npm ci``` to install the client dependencies.

### Set up environment variables
- In the ```server/config``` folder, create a file titled ".env"
    - This file, which will contain sensitive info, will automatically be ignored by .gitignore
- You can use the template in ```server/config/env.example``` to insert your environment variables


### .env template setup

*Please copy and paste this template into a new .env file instead of removing .example from the `server/config` folder*

Keeping `DB_STRING` as `mongodb://127.0.0.1:27017/` will generate an instanced MongoDB in your local. To view your database, you can use <a href="https://www.mongodb.com/products/compass" target="_blank">compass</a>. You can also create a [MongoDB database](https://www.mongodb.com/basics/create-database#:~:text=In%20MongoDB%20Compass%2C%20you%20create,Click%20%22Create%20Database%22) on [MongoDB.com](https://www.mongodb.com/), but would need to update the `DB_String` to [connect to MongoDB.](https://www.mongodb.com/docs/compass/current/connect/)


<!-- saving this for future edit. allows users to use their own discord. http://localhost:2121/auth/discord/callback -->
```
# Please copy and paste this template into a new .env file instead of removing .example from the file name
# Do not change PORT or OAUTH_REDIRECT_URL
# DB_STRING will create a MongoDB instance on your computer but can be changed to a mongodb.com cluster
PORT = 2121
DB_STRING = mongodb://127.0.0.1:27017/
DISCORD_CLIENT_ID = 1039303417199345684
DISCORD_CLIENT_SECRET = DISCORD_CLIENT_SECRET
OAUTH_REDIRECT_URL = http://localhost:3000/
MOCK_USER=true
NODE_ENV=development
```

*`DISCORD_CLIENT_SECRET` is not required unless you need to test the discord login. `MOCK_USER=true` and `NODE_ENV=development` allow the application to generate a fake user `testuser#1234` for development purposes. If you need `DISCORD_CLIENT_SECRET`, contact Chanel, Eric, Matt, or Caleb.*


It is not recommended for beginners, but you can create your own `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` by going to [Discord Developer Portal](https://discord.com/developers/docs/intro); you must set the redirect to `http://localhost:2121/auth/discord/callback` for the application to function.

### Running the application
- Run ```npm run dev``` to run the app in development mode. The client and server will then run concurrently.
    - Note: The ```npm start``` script is ONLY meant for production, i.e. our Cyclic deployment.

# Deploying to Cyclic
### Initial Setup:
- Clone the repository
- Set up on cyclic - deployment will succeed
- Open the application at the given URL - it will have errors
- This is the expected behavior, as we still need to connect our application to MongoDB and OAuth/Discord

### Connect to MongoDB:
- If you have not already, create a MongoDB account
- Create a MongoDB "Shared" database (which is free!), and name it whatever you like
- Create a new cluster
- In the cluster's settings, whitelist 0.0.0.0 in the Network Access section to whitelist all IP addresses
- Get the connection string from the MongoDB "Connect" menu
- Paste the connection in the Variables tab in Cyclic
- This will allow your application to connect to your MongoDB cluster

### Connect to Discord/OAuth
- Navigate to https://discord.com/developers/applications and create a new application
- In the application settings, navigate to the OAuth -> General menu
- Set the "Redirect" to http://[app-name-here].cyclic.app/auth/discord/callback
    - IMPORTANT: The URI here MUST start with http
- Copy your Discord client id and client secret into the Variables tab in Cyclic
- Set OAuth redirect URL variable in this tab to your app's current URL (e.g. https://[app-name-here].cyclic.app/ (this one can be https))

No need to re-deploy afterwards. The serverless nature of Cyclic will cause your app to load your variables in on the next refresh.

Enjoy your brand new full-stack MERN application!