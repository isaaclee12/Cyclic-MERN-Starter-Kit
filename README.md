# Cyclic-MERN-Starter-Kit
A demo repo with the deployment setup/basic architecture of a robust full-stack application. Good template for starting a MERN project!

# Credits
- Repo contributed by <a href="https://github.com/isaaclee12/">Isaac Lee</a>
- Infrastructure based on <a href="https://github.com/Caleb-Cohen/Together">Together</a>, created by <a href="https://leonnoel.com/100devs/">#100Devs</a>
- Credit to <a href="https://github.com/RascalTwo">Rascal_Two</a> for help with Cyclic deployment

# Want to Contribute?
- If you find any bugs, or have a small feature you'd like to see, please make an Issue.

# Roadmap:
- Implement Update functionality for the "Example" Object.
- Add better documentation for how this app works.

# Tech Used:
- React
- Tailwind CSS
- Express
- Mongoose
- MongoDB

## Tools, Accounts & Downloads
- <a href="https://github.com/join" target="_blank">GitHub account</a>
- Git installed and setup. Guide for [Mac](https://www.youtube.com/watch?v=hMEyBtsuAJE) & [Windows](https://www.youtube.com/watch?v=2j7fD92g-gE)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Discord](https://discord.com/) & Joined [100 Devs](https://discord.gg/100devs)
- [Compass **(Recommended)**](https://www.mongodb.com/products/compass) or similar MongoDB GUI if using `mongodb://127.0.0.1:27017/` as your DB_STRING
- [MongoDB Account: **(Optional)**](https://www.mongodb.com/) Only required if not using Compass. You will need to change your DB_STRING `mongodb://127.0.0.1:27017/` as your DB_STRING (see [below](#env-template-setup))
- [NodeJS v18.12.1](https://nodejs.org/download/release/v18.12.1/)
 
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

*Please copy and paste the contents of the ```env.example``` file into a new file titled ```.env``` instead of modifying or removing the contents of ```env.example``` from the `server/config` folder*

Keeping `DB_STRING` as `mongodb://127.0.0.1:27017/` will generate an instanced MongoDB in your local. To view your database, you can use <a href="https://www.mongodb.com/products/compass" target="_blank">compass</a>. You can also create a [MongoDB database](https://www.mongodb.com/basics/create-database#:~:text=In%20MongoDB%20Compass%2C%20you%20create,Click%20%22Create%20Database%22) on [MongoDB.com](https://www.mongodb.com/), but would need to update the `DB_String` to [connect to MongoDB.](https://www.mongodb.com/docs/compass/current/connect/)


```
# Please copy and paste this template into a new .env file instead of removing .example from the file name
# Do not change PORT or OAUTH_REDIRECT_URL
# DB_STRING will create a MongoDB instance on your computer but can be changed to a mongodb.com cluster
PORT = 2121
DB_STRING = mongodb://127.0.0.1:27017/
NODE_ENV=development
```

### Running the application
- Run ```npm run dev``` to run the app in development mode. The client and server will then run concurrently.
    - Note: The ```npm start``` script is ONLY meant for production, i.e. our Cyclic deployment.

# Deploying to Cyclic
### Initial Setup:
- Clone the repository
- Set up on cyclic - deployment will succeed
- Open the application at the given URL - it will have errors
- This is the expected behavior, as we still need to connect our application to MongoDB

### Connect to MongoDB:
- If you have not already, create a MongoDB account
- Create a MongoDB "Shared" database (which is free!), and name it whatever you like
- Create a new cluster
- In the cluster's settings, whitelist 0.0.0.0 in the Network Access section to whitelist all IP addresses
- Get the connection string from the MongoDB "Connect" menu

### Set Environment Variabes:
- Paste the connection string in the Variables tab in Cyclic
- Set/create the variable "PORT" to "2121" in the Variables tab in Cyclic
- This will allow your application to connect to your MongoDB cluster
- Set/create the variable "NODE_ENV" and set it to "production"

No need to re-deploy afterwards. The serverless nature of Cyclic will cause your app to load your variables in on the next refresh.

Enjoy your brand new fully deployed full-stack MERN application!