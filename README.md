# Golf Course Management App

## Overview

You were tasked by your employer to build an app that would cater to high-value golf courses in order to help them keep things organize better than using just that papyrus-like...stuff that nobody uses anymore. Ugh. Makes me sick.

Anywho, ideally, the MVP of this product would be just a way for them to keep track of tee times. If there was a way that facilities management features could be integrated at some point down the road, that would also be great.

The key thing to remember about this, though, is that this is a large-scale production application. Since you are not the only one who will be working on this codebase, you will need to write tests!

## Features

### Base Goals

Build an API with the following abilities

- Create a tee time
- Retrieve all tee times
- Retrieve one tee time
- Update a tee time
- Cancel/Remove a tee time

- Create a customer
- Retrieve all customers
- Retrieve one customer
- Update a customer
- Remove a customer
- Authenticate a customer

Notes:

- All routes should be tested and passing
- Customers will not have the ability to log in
- The users of this software do not have to log in, so a "users" entity is not required.

### Stretch Goals

Build the client with React and Typescript and implement the following user stories:

- As a user, I can create a tee time for one to four customers
- As a user, when creating a tee time for a customer, I am able to search for the customer by id or name.
- As a user, I can view all of the tee times
- As a user, I can view the details about a single tee time
- As a user, I can update an existing tee time for a customer
- As a user, I can cancel/remove a tee time for a customer

### Nightmare Mode

Add a customers entity that would allow customers to create a tee time themselves online.

## Tables

### Tee Times

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| time        | DATETIME  |

### Customers

| Column Name | Data Type    |
| ----------- | ------------ |
| id          | SERIAL       |
| name        | VARCHAR(255) |
| email       | VARCHAR(255) |
| phone       | VARCHAR(255) |

### Customers' Tee Times

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| customer_id | INTEGER   |
| tee_time_id | INTEGER   |
