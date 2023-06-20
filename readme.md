# This is the backend for the sentence builder demo

# Key Features
 - Retrieve sentences
 - Store sentences
 - Store words
 - Retrieve partial sentences
 - Retrieve words/building blocks

# To DO
 - ~~Fetch methods for building words~~
 - ~~Fetch for partial sentences~~
 - ~~Query Limits~~
 - Optimizations(!)
 - MongoDB AutoImport for Datatable!
 - Auth System
# Technology Used
 - MongoDB
 - Express
 - NodeJS

# API Routes

####### Words #######
  - GET Adjectives
  - GET Adverbs
  - GET Conjunctions
  - GET Determiners
  - GET Exclamations
  - GET Nouns
  - GET Prepositions
  - GET Pronouns
  - GET Verbs

####### Sentences #######
  - GET Partial_Sentences
  - GET Completed_Sentences
  - POST Partial_Sentences
  - POST Completed_Sentences
# Getting Started
Before you begin ensure you have the following installed:
 - Git
 - Nodejs 16 or higher
 - npm
 - MongoDB Installation + MongoDBCompass
   - On windows machine mongodb server may need to be started manually: Task Manager -> Services -> Mongodb -> Start


 In a new terminal type the following commands, hitting enter/return after each step:
 1. `git clone https://github.com/HeXx123321/sentence-builder-backend`
 2. `cd sentencer-builder-backend`
 3. `npm install`
 4. `npm run devStart`