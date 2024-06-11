# Team Management Service

Team Management Service is a microservice built using NestJS, Node.js, and TypeScript. This service provides the ability to add, update, delete, and retrieve team members. It uses MongoDB as the database.

## Features

- **Admin Role**:
  - Add new team members
  - Update existing team members
  - Delete team members
  - Retrieve team members
- **User Role**:
  - Retrieve all team members
  - Retrieve a specific team member

## Technologies Used

- NestJS
- Node.js [version: 18 or above]
- TypeScript
- MongoDB

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. Clone the repository
    ```bash
    git clone https://github.com/864-satish/team-management-service.git
    cd team-management-service
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Configure MongoDB

   Ensure MongoDB is running. Create a `.env` file in the root directory and add the following:
    ```env
    NODE_ENV=local
    ADMIN_AUTH_TOKEN=<auth_token>
    USER_AUTH_TOKEN=Bearer O2NZS9XWA1Q3MTLGP7E8K5Y4DR6FBU
    MONGO_URI=mongo-db-url
    ```
- Note: Please change these sample auth-token

4. Running the app
    ```bash
    npm run start

    # watch mode
    npm run start:dev

    # production mode
    npm run start:prod
    ```
5. Test
    ```bash
    # unit tests
    npm run test

    # test coverage
    npm run test:cov

    # e2e tests
    npm run test:e2e

    ```

## REST API Endpoints

### Add a Team Member (Admin Only)

```bash
curl --location 'http://localhost:3002/member/' \
--header 'Authorization: <auth_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Nitish",
    "lastName": "Kumar",
    "email": "nitish.k@thena.ai",
    "mobileNumber": "+917248485901",
    "role": "ADMIN"
}'
```

### Update a Team Member (Admin Only)
```bash
curl --location --request PUT 'http://localhost:3002/member/<id>' \
--header 'Authorization: <auth_token>' \
--header 'Content-Type: application/json' \
--data '{
    "id": "<id>",
    "firstName": "Nitish",
    "lastName": "Updated "
}'
```

### Delete a Team Member (Admin Only)

```bash
curl --location --request DELETE 'http://localhost:3002/member/<id>' \
--header 'Authorization: <auth_token>'
```

### Retrieve a Specific Team Member with id (User & Admin)
```bash
curl --location 'http://localhost:3002/member/<id>' \
--header 'Authorization: <auth_token>'
```

### Retrieve All Team Members (User & Admin)
```bash
curl --location 'http://localhost:3002/member/' \
--header 'Authorization: <auth_token>'
```


### To be added
- APIs to login/logout for Admins & Users 
- JWT or oAuth authentication for all endpoints
