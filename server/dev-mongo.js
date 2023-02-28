import dotenv from 'dotenv'

dotenv.config({ path: "./config/.env" });
import { MongoMemoryServer } from 'mongodb-memory-server';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// This file runs a MongoDB server locally for development
async function run() {
  const dbString = process.env.DB_STRING || ''
  if (!dbString.includes('localhost') && !dbString.includes('127.0.0.1')) {
    console.log('DB_STRING is not localhost, not running local mongo')
    return
  }
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dbPath = path.join(__dirname, '..', '.mongo');

  if (!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath);
  }

  // start mongo
  const mongod = await MongoMemoryServer.create({
    instance: {
      port: 27017,
      dbPath,
      // to persist data between runs (https://github.com/nodkz/mongodb-memory-server/issues/524)
      storageEngine: 'wiredTiger',
    },
  });

  const uri = mongod.getUri();
  console.log(`Mongo server started on: ${uri}`);
}

run()
