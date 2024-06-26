# TELECHISTE-3000

!!!ALL ROUTES START WITH /api

### DB Diagram

![](diagram.png)

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `name`, `email`, `password`,                    | { message: `string`, result: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { message: `string`, result: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | admin| Get All Users            |                                                 | { message: `string`, result: `array` }
GET    | /user/:id        | YES   | admin| Get One User             |                                                 | { message: `string`, result: `object` }
GET    | /user/profile    | YES   | user | Get Own Profile             |                                              | { message: `string`, result: `object` }
PUT    | /user/:id        | YES   | admin | Update One User          | `name`, `email`, `password`, `role`            | { message: `string`, result: `object` }
PUT    | /user/profile    | YES   | user | Update Own Profile          | `name`, `email`                              | { message: `string`, result: `object` }
PUT    | /user/password    | YES  | user | Update Own password         | `old password`, `new password`               | { message: `string`, result: `object` }
POST    | /user        | YES   | admin | Create One User          | `name`, `email`, `password`, `role`            | { message: `string`, result: `object` }


## Joke Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /joke            | YES   | user | Get All Jokes            |                                                 | { message: `string`, result: `array` }
GET    | /joke/:id         | YES   | user | Get One Joke           |                                                 | { message: `string`, result: `object` }
POST    | /joke            | YES   | user | Create Jokes            |  `value`, `category_id`                        | { message: `string`, result: `object` }
PUT    | /joke/:id/like     | YES   | user | add Like to Joke            |                                          | { message: `string`, result: `object` }
POST    | /joke/:id/favorite | YES   | user | Add joke to own favorites   |                                         | { message: `string`, result: `object` }
