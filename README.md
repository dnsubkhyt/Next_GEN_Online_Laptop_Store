# Next_GEN_Online_Laptop_Store
This project develops a backend application for an online laptop store using MongoDB. It stores data on laptops, customers, transactions, and inventory. The system allows for managing product details, customer purchases, and inventory updates efficiently using MongoDB’s flexible data handling capabilities.

## Table of Contents

*   Technologies Used
    
*   Project Structure
    
*   Setup and Installation
    
*   Running the Application Locally
    
*   Deploying the Application to Heroku
    
*   Testing the API
    
*   Endpoints
    
*   Error Handling
  
## Technologies Used

*   **node.js**: JavaScript runtime for building the backend.

*   **express**: Web framework for building the API.

*   **mongoose**: A MongoDB object modeling tool for Node.js, which provides a straight-forward way to interact with your MongoDB database.
    
*   **axios**: HTTP client for making requests to the weather API.
    
*   **joi**: Data validation library.

*   **dotenv**: Loads environment variables from a .env file.

*   **bcryptjs**: A library to hash passwords for secure storage.

*   **nodemon**:  A development tool that monitors your Node.js application for changes and automatically restarts the server, saving you time.
    
## Project Structure

```bash
├── app.js                    # Main entry point of theapp

├── config

│   ├── mongoose.js           #MongoDB configuration

│   ├── joi.js                #Joi validation schema

├── controllers

│   ├── productController.js     #Product CRUD logic

|   ├── userController.js        #User CRUD logic

│   └── transactionController.js  #Placing Transaction logic

├── models

|   ├── productModel.js          # Mongoose schema for products 

|   ├── userModel.js            # Mongoose schema for users

│   └── transactionModel.js          # Mongoose schema for transactions

├── routes

│   ├── userRoutes.js            # Routes for user API

│   ├── productRoutes.js         # Routes for product API

│   └── transactionRoutes.js      # Routes for transaction API

├── .env                      # Environment variables

├── package.json              # Project dependencies andscripts

└── package-lock.json        # Dependency lock file
```


## Setup and Installation

### Prerequisites

To run this project, you need the following:

*   **Node.js** (Recommended: version 18.x.x or later)
    

*   **MongoDB Compass** (for a local database)
    

*   **Heroku account** (for deployment)


### Installation

1.  #### Navigate to your project folder:

```bash
cd path/to/your/project-folder
```
2.  #### Initialize a new Git repository:

```bash
git init
```
3.  #### Add your remote repository:
```bash
git remote add origin https://github.com/your-username/onlineStore.git
```
4.  #### Add all files to the staging area:
```bash
git add .
```
5.  #### Commit the files:

```bash
git commit -m "Initial commit"
```
6. #### Push to the remote repository:
```bash
git push -u origin main
```
7.  #### Install the required dependencies: 
```bash
npm install _package-name
```

### Setting Up MongoDB Compass

Heroku doesn’t have access to local MongoDB instances, so you need to use **MongoDB Atlas** to create a remote database.

1. #### Go to [MongoDB Compass]([https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/try/download/compass)) and download and install it.   
- Once installed, open MongoDB Compass on your local machine.

2.  #### Set Up Your Connection in Compass:
- Open MongoDB Compass.
- Click on New Connection.
- For a local MongoDB instance, use:
```bash
mongodb://localhost:27017
```
3.  #### Create a Database and Collection:
- Once connected, you will be able to see the database interface.
- You can create a new database or use an existing one.
- After selecting the database, create a new collection (e.g., `products`, `users`, `transactions`).

4.  #### Start Working with Your Data:
- With Compass, you can add documents, run queries, and explore your MongoDB database graphically.
- You can use the GUI to insert data, perform CRUD operations, or run MongoDB queries.

### Setting Environment Variables

Create a `.env` file in the root directory of your project,and add the following values:

```env
MONGO_URI=mongodb://localhost:27017/mydatabase
JWT_SECRET=mysecretkey
PORT=5000
```
* Replace mydatabase and port number with your credentials

### Running the Application Locally

1.  #### Start the application locally:   
```bash
nodemon app.js
```
2.  #### Your app will now be available at `http://localhost:----`
*   Replace the port if needed.


### Deploying the Application to Heroku

#### Step 1: Install Heroku CLI

1.  #### Download and install the Heroku CLI.
2.  #### After installation, log in to your Heroku account:
```bash
heroku login
```


#### Step 2: Create a New Heroku App

1. ####  In your terminal, navigate to your project directory:
```bash
cd path/to/your/project
```
2.  #### Create a new Heroku app with a custom name:
```bash
heroku create your-custom-app-name
```

#### Step 3: Set Environment Variables on Heroku

Set your MongoDB connection string and weather API key asenvironment variables on Heroku:

```bash
heroku config:set MONGODB_URI=your-mongodb-atlas-connection-string –app app\_name

heroku config:set API_KEY=your-openweathermap-api-key –app app\_name
```

#### Step 4: Push Your Code to Heroku

1. ####  Add the Heroku remote repository:  
```bash
git remote add heroku https://git.heroku.com/your-custom-app-name.git
```
2. #### Push your code to Heroku: 

```bash
git push heroku main
```


#### Step 5: Open Your App

After deployment, open your app using the following command:
```bash
heroku open
```
You can also visit it directly at https://your-custom-app-name.herokuapp.com.



## API Endpoints Documentation

### Product Endpoints

- **POST /add**
  - **Description**: Add a new product to the library.
  - **Request Body**:
    ```json
    {
      "name": "Product Name",
      "price": 99.99,
      "stock": 10,
      "category": ["Electronics"],
      "description": "Detailed product description"
    }
    ```
  - **Response**: The added product's details.

- **GET /getProducts**
  - **Description**: Fetch all products from the library.
  - **Response**: A list of all products in the library.

- **PUT /update/:id**
  - **Description**: Update a specific product by its ID.
  - **Request Body**:
    ```json
    {
      "name": "Updated Product Name",
      "price": 89.99,
      "stock": 15,
      "category": ["Electronics"],
      "description": "Updated product description"
    }
    ```
  - **Response**: The updated product's details.

---

### Transaction Endpoints

- **POST /placeOrder**
  - **Description**: Create a new transaction (place an order).
  - **Request Body**:
    ```json
    {
      "userId": "user_id_here",
      "productId": "product_id_here",
      "quantity": 2
    }
    ```
  - **Response**: A confirmation message with the order details.

---

### User Endpoints

- **POST /signup**
  - **Description**: Register a new user.
  - **Request Body**:
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "password123",
      "address": "123 User St."
    }
    ```
  - **Response**: Confirmation message for successful registration.

- **POST /login**
  - **Description**: Log in an existing user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**: Login success message and token.

- **GET /me**
  - **Description**: Get the logged-in user's information.
  - **Response**: The user's information (name, email, address, etc.).

- **DELETE /me**
  - **Description**: Delete the logged-in user's account.
  - **Response**: Confirmation message that the account was deleted.

---


### Error Handling

If there are any errors, such as invalid product IDs, insufficient stock, or failed transactions, the application will return an appropriate error message with an HTTP status code.

Example error for transaction creation (e.g., insufficient stock):

```json
{
    "message": "Not enough stock available"
}
```

### Conclusion

This application allows you to manage products, handle transactions, and manage user accounts in an eCommerce environment. It is fully deployed on Heroku and uses MongoDB Atlas for data storage. 

To test the application, follow the provided API endpoints and use tools like Postman or Insomnia to interact with the API.

Feel free to modify the app to suit your needs, and don't hesitate to reach out if you have any questions or need help setting it up.
