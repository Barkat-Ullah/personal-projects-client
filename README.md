# 🚀 Personal Project

## 📌 Overview
This is a **Next.js** and **TypeScript**-based web application with a backend powered by **Node.js**, **Express**, and **Mongoose**. The project also integrates **Acternity UI** for a modern and sleek user interface.

## 🛠️ Technologies Used

### Frontend
- ⚡ **Next.js** (App Router)
- 📝 **TypeScript**
- 🎨 **Acternity UI** (for styling & UI components)

### Backend
- 🌎 **Node.js**
- 🚀 **Express.js** (REST API)
- 🗄️ **Mongoose** (MongoDB ORM)

## 📂 Project Structure
```
├── backend/                 # Node.js & Express backend
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── controllers/         # Route handlers
│   ├── config/              # Configuration files
│   ├── server.ts            # Entry point
│
├── frontend/                # Next.js & TypeScript frontend
│   ├── components/          # Reusable UI components
│   ├── pages/               # Next.js pages
│   ├── utils/               # Helper functions
│   ├── styles/              # Global styles
│   ├── app/                 # App Router components
│
├── .env                     # Environment variables
├── package.json             # Dependencies & scripts
├── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1️⃣ Clone the repository:
```sh
git clone https://github.com/Barkat-Ullah/personal-projects-client
cd your-repo
```

2️⃣ Install dependencies:
```sh
# Install frontend & backend dependencies
npm install
```

3️⃣ Set up environment variables:
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4️⃣ Run the project:
```sh
# Start the backend
cd backend && yarn dev

# Start the frontend
cd frontend && yarn dev
```

## 📌 Features
✅ User Authentication (Login & Signup)
✅ Responsive UI with Acternity UI
✅ CRUD Operations with MongoDB
✅ Secure API with JWT Authentication
✅ Fully typed with TypeScript

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📄 License
This project is licensed under the MIT License.

---

💡 _Built with ❤️ using Next.js, TypeScript, and Node.js_.

