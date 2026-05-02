# 🚀 User Management API

> A clean and scalable RESTful API built with Node.js, Express, and MongoDB for managing user data with full CRUD functionality.

---

## 📊 Project Overview

| Feature            | Description                          |
| ------------------ | ------------------------------------ |
| CRUD Operations    | Create, Read, Update, Delete users   |
| Architecture       | MVC (Routes, Controllers, Models)    |
| Database           | MongoDB with Mongoose                |
| Middleware         | Request logging implemented          |
| Environment Config | Uses `.env` for secure configuration |

---

## 🛠️ Tech Stack

| Technology | Usage               |
| ---------- | ------------------- |
| Node.js    | Runtime environment |
| Express.js | Backend framework   |
| MongoDB    | Database            |
| Mongoose   | ODM for MongoDB     |

---

## 📂 Folder Structure

```bash id="fs1"
PROJECT
├── controllers/
│   └── users.js
├── middlewares/
│   └── index.js
├── models/
│   └── user.js
├── routes/
│   └── user.js
├── connections.js
├── index.js
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

```bash id="fs2"
git clone <your-repo-link>
cd project-folder
npm install
```

---

## ▶️ Run the Server

```bash id="fs3"
node index.js
```

🌐 Server runs on:
`http://localhost:8001`

---

## 🔐 Environment Variables

Create a `.env` file in root:

```env id="fs4"
MONGO_URL=your_mongodb_connection_string
PORT=8001
```

---

## 📡 API Endpoints

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| POST   | `/user`     | Create new user |
| GET    | `/user`     | Get all users   |
| GET    | `/user/:id` | Get user by ID  |
| PATCH  | `/user/:id` | Update user     |
| DELETE | `/user/:id` | Delete user     |

---

## 🧪 Sample Request

```json id="fs5"
{
  "firstName": "Aditya",
  "lastName": "Sinha",
  "email": "adi@gmail.com",
  "gender": "male",
  "jobTitle": "Student"
}
```

---

## 🧠 Key Learnings

* REST API Design
* Express Routing & Middleware
* MongoDB CRUD Operations
* Debugging & Error Handling
* Clean Backend Architecture

---

## 🚀 Future Improvements

* JWT Authentication
* Input Validation (Joi/Zod)
* Pagination & Filtering
* Rate Limiting
* Deployment (Render / Railway)

---

## 🙌 Author

**Aditya**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
