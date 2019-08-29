 # Free Mentors

[![Build Status](https://travis-ci.org/JackieBinya/free-mentors-challenge-2.svg?branch=develop)](https://travis-ci.org/JackieBinya/free-mentors-challenge-2) [![Coverage Status](https://coveralls.io/repos/github/JackieBinya/free-mentors-challenge-2/badge.svg?branch=develop)](https://coveralls.io/github/JackieBinya/free-mentors-challenge-2?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/66b1ea7d2f9031797098/maintainability)](https://codeclimate.com/github/JackieBinya/free-mentors-challenge-2/maintainability)

Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions.

## Table Contents
 1. [Prerequisites](#Prerequisites)
 2. [Getting Started](#Getting-Started)
 3. [Installing the Api](#Installing-api)
 4. [Running Tests](#Running-the-tests)
 5. [API Endpoints](#Api-Endpoints)
 6. [UI Templates](#UI-Templates)
 7. [Heroku URL](#Heroku-URL)
 8. [Pivotal Tracker Board](#PIVOTAL-TRACKER-BOARD)
 
## Prerequisites

Before you clone this repo ensure that you have the following already installed on your machine
- visual studio code [here](https://code.visualstudio.com/download) OR any text editor  OR IDE of your choice
- git get it [here](https://git-scm.com)
- nodejs get it [here](https://nodejs.org)
- postgres get it [here](https://www.postgresql.org/download/)

## Getting Started

To clone this repo run the following command

```sh
git@github.com:JackieBinya/free-mentors-challenge-2.git
```

## Set up the server

- Run the following command on your terminal run to install all dependencies listed in the package.json file ``
npm install
``
- Then  proceed to create a .env file, then set up all the environmental variables listed in the .env.sample file.
3. To start your server, run the following command on the terminal ``
npm dev:start
``

## Running the tests

TO run the test for the api

```sh
npm test
```

## Api Endpoints

These are the endpoints for this api :

| HTTP Method        | Endpoint                 | Functionality|
| ------------- | --------------------------|------------|
| POST          | `/api/v1/auth/signup`   | Creates a new user account |
| POST          | `/api/v1/auth/signin`   | Allows an existing user to sign in |
| PATCH        | `/api/v1/user/:userId`    | Change a user to a mentor. |
| GET   | `/api/v1/mentors`| Get all mentors |
| GET  | `api/v1/mentors/:mentorId` |  Get a specific mentor |
| POST | `api/v1/sessions` | Create a  mentorship session request |
| PATCH  | `api/v1/sessions/:sessionId/accept` | A mentor can accept a mentorship session request |
| PATCH  | `api/v1/sessions/:sessionId/reject` | A mentor can reject a mentorship session request |
|  GET  | `api/v1/sessions` | Get all mentorship session requests |

## UI Templates

Click here to view: [UI Templates gh-pages](https://jackiebinya.github.io/free-mentors---challenge-1/UI/)

## Heroku URL

Click here to view: [HEROKU URL](#)

## PIVOTAL TRACKER BOARD

Click here to view: [PIVOTAL TRACKER STORIES](https://www.pivotaltracker.com/n/projects/2382168)

