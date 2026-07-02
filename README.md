# DMart Express.js

A beginner-friendly backend project built with **Node.js** and **Express.js** to learn the fundamentals of backend development. This project demonstrates modular routing using Express Router and exposes simple REST API endpoints for different modules.

---

##  Features

- Express.js Server Setup
- Modular Routing using `express.Router()`
- Customer Routes
- Employee Routes
- Product Routes
- Payment Routes
- REST API Endpoints
- JSON Responses
- Organized Project Structure

---

##  Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman (API Testing)

---

##  Project Structure

```
dmart-expressjs/
│
├── index.js
├── package.json
├── customer.js
├── employee.js
├── payment.js
├── product.js
└── README.md
```

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/kumaripoojasah/Dmart-expressjs.git
```

Move into the project folder:

```bash
cd Dmart-expressjs
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node index.js
```

or (if using nodemon):

```bash
nodemon index.js
```

---

## Server

```
http://localhost:4000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/customer` | Get customer details |
| GET | `/employee` | Get employee details |
| GET | `/products` | Get product details |
| GET | `/payment` | Get payment details |

---

##  Concepts Covered
- Express Server
- Routing
- Express Router
- `app.use()`
- `router.get()`
- Request & Response Objects
- Modular Code Structure
- REST API Basics
- JSON Response

---

##  Future Improvements

- Route Parameters
- Query Parameters
- CRUD Operations
- MongoDB Integration
- Mongoose
- Authentication (JWT)
- Error Handling Middleware
- Input Validation

---

## Author

**Pooja Kumari**

GitHub: https://github.com/kumaripoojasah
