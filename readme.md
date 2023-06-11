# This is the backend for the sentence builder demo

# Key Features
 - Retrieve sentences
 - Retrieve partial sentences
 - DB Models

# To DO
 - Fetch methods for building words
 - Fetch for partial sentences
 - Optimizations
 - Unit tests

# Key assumptions
 - Words are "immutable" in the database, essentially read-only
 - Only sentences and partial_sentences are "mutable"
 - Small scale demo so no fancy auth system (To get clarification here)
 - No fancy module system (!)
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