# This is the backend for the sentence builder demo

# Key Features
 - Retrieve sentences
 - Store sentences
 - Retrieve partial sentences
 - Retrieve words/building blocks

# To DO
 - ~~Fetch methods for building words~~
 - Fetch for partial sentences
 - Auth System?(!)
 - ~~Query Limits~~
 - Optimizations(!)
 - Unit tests

# Key assumptions
 - Words are "immutable" in the database, essentially read-only
 - Only sentences and partial_sentences are "mutable"
 - Small scale demo so no fancy auth system
 - Code liniency in terms of spaghettification ("Nervous laughter")
 - Focus on a demo ready product

# Technology Used
 - Check the package.json
 - Mongoose for ORM
 - Mongo as db
 - DotEnv for sensitive keys?
 - CORS Headers, just in case
 - Express (!)
 - Validator (Don't think this is used)

# Getting Started
Before you begin ensure you have the following installed:
 - Git
 - Nodejs 18 or higher
 - npm

 In a new terminal type the following commands, hitting enter/return after each step:
 1. `git clone https://github.com/HeXx123321/sentence-builder-backend`
 2. `cd sentencer-builder-backend`
 3. `npm install`
 4. `npm run devStart`