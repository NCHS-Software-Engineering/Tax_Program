# Overview
Tax App calculator is a helpful tool for consumer economics students filing the 1040 tax-form that need additional aid to calculate the tax they owe based on their income. 
It can be used to visualize how a person can go about calculating their taxes using the tax table provided by the IRS. 
Additionally, it can be used to verify their own work is correct. 
For people who would like to see a deeper analysis and breakdown of their taxes, they can visually see what percentage of their money is going to each category/tax bracket. 
To get started with the tax app, open the web application and begin following the given prompts and entering the information asked.
All other calculations and table visualising tool will automatically change according to what the user enters. 

# Compatibility
This program will work on any operating system that can run the latest version of ReactJS

# Dependencies
1. NodeJS
2. NPM
3. ReactJS

# Linux Installation
for Debian users (PiOs, etc.):
1. Download our github file
2. install and update npm using `sudo apt install nodejs npm && npm install create-react-app && npm upgrade`

# Windows Installation
1. Download our github file
2. download React from this website: https://nodejs.org/en/download/
3. In VScode, run `npm install create-react-app && npm upgrade`

# MacOS Installation
1. Download our github file
2. download React from this website: https://nodejs.org/en/download/
3. In VScode, run `npm install create-react-app && npm upgrade`

# Configuration
There isn't much configuration to do when you run the React App

# Running the program
1. To run the server, on the command line run: `cd server && npm start`
2. To run the client, on the command line run: `cd client && npm start`
3. There should now be a webpage open on your browser locally running the React App

# Project Architecture
Our program uses NodeJS and React to create an app that can calculate the 1040 tax form, as well as pulls and processes our school's SQL server for tax table information

# Data Schema
our programs SQL table has 6 colums: Minimum Income, Maximum Income, Head of Household, Single Married Filing Serperately, Married Filing Jointy. Minimum and Maximum Income colums represent the range on values, and the rest of the colums represent the amount owed depending on your filing status. The Table goes up to $100,000

# Remaining User Stories
1. As a consumer economics student, I will be able to see the updated tax table for the current year (Difficulty 9).
2. As a consumer economics student, I will receive automatic feedback when I enter incorrect information. The feedback should be detailed enough where I understand what went wrong (Difficulty 1).

# Known Issues
1. The column of the chosen option is not highlighted yet
2. At any given interval, the counter to highlight the option goes wrong. Sometimes it works, sometimes it doesn't, we don't know why
