# 100Devs-MERN-Starter-Kit
A demo repo with the deployment setup/basic architecture of the 100Devs Together project. Good template for starting a MERN project!

# Roadmap:
~~- Implement Discord Authorization~~
~~- Set Up "Example" Object for API~~
- Implement CRUD functionality for the "Example" Object
- Have certain features only appear if authorized
- Ask Rachel about "repo" vs "template" on GitHub.

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
# Local Initialization
- Clone the repo
- Run ```npm install``` in the root folder to install the server dependencies.
- Run ```cd client``` then run ```npm install``` to install the client dependencies.
- Run ```npm run dev``` to run the app in development mode. The client and server will then run concurrently.
    - Note: ```npm start``` script is meant for production, i.e. our Cyclic deployment.

# Deploying to Cyclic
### Initial Setup:
- Clone the repository
- Set up on cyclic - deployment will succeed
- Open the application at the given URL - it will have errors
- This is the expected behavior, as we still need to connect our application to MongoDB and OAuth/Discord

### Connect to MongoDB:
- If you have not already, create a Mongo
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

No need to re-deploy afterwards. The serverless nature of Cyclic will cause your app to have your variables loaded in on the next refresh.

Enjoy your brand new full-stack MERN application!