# User Registration System

A modern, secure user authentication system built with **NestJS** (backend) and **React** (frontend). Features beautiful UI design, proper error handling, and MongoDB integration.

![User Registration Demo](https://img.shields.io/badge/demo-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

### Backend (NestJS)
- 🔐 **Secure Authentication**: Password hashing with bcrypt
- ✅ **Input Validation**: Email format and password strength validation  
- 🛡️ **Error Handling**: Proper HTTP status codes and meaningful error messages
- 📊 **Database Integration**: MongoDB with Mongoose ODM
- 🌐 **CORS Support**: Configurable cross-origin resource sharing
- ⚙️ **Environment Variables**: Secure configuration management

### Frontend (React)
- 🎨 **Modern UI**: Beautiful design with Tailwind CSS and gradients
- 📱 **Responsive Design**: Mobile-first responsive interface
- ✅ **Form Validation**: Real-time validation with React Hook Form
- 🔄 **API Integration**: React Query for state management and caching
- 💫 **Loading States**: Smooth loading indicators and animations
- 🎯 **Error Handling**: User-friendly error messages

### Database Schema
- **User Model**:
  - `email` (String, required, unique)
  - `password` (String, required, hashed)
  - `createdAt` (Date, default: now)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.19+ or 22.12+ 
- **MongoDB** (local or cloud)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-registration
   ```

2. **Install dependencies**

   **Backend:**
   ```bash
   cd server
   npm install
   ```

   **Frontend:**
   ```bash
   cd client
   npm install
   ```

### Configuration

3. **Setup environment variables**
   
   Create `.env` file in the `server` directory:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/ia06_users
   FRONTEND_URL=http://localhost:5173
   ```

   **MongoDB Options:**
   - **Local MongoDB**: `mongodb://127.0.0.1:27017/ia06_users`
   - **MongoDB Atlas**: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>?retryWrites=true&w=majority`

4. **Start MongoDB** (if running locally)
   ```bash
   # Option 1: MongoDB Service
   mongod
   
   # Option 2: Docker
   docker run --name mongodb -p 27017:27017 -d mongo:latest
   ```

### Running the Application

5. **Start the backend server**
   ```bash
   cd server
   npm run start:dev
   ```
   Server will run on: http://localhost:3000

6. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on: http://localhost:5173

## 📁 Project Structure

```
user-registration/
├── server/                 # NestJS Backend
│   ├── src/
│   │   ├── user/
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   ├── schemas/    # MongoDB Schemas
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   └── user.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env               # Environment variables
│   └── package.json
├── client/                # React Frontend
│   ├── src/
│   │   ├── pages/         # React pages
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🎯 API Endpoints

### POST `/user/register`
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "...",
    "email": "user@example.com",
    "createdAt": "2025-12-02T..."
  }
}
```

**Error Response (409 - Conflict):**
```json
{
  "statusCode": 409,
  "message": "User with this email already exists"
}
```

## 🛠️ Development

### Backend Commands
```bash
cd server

# Development mode
npm run start:dev

# Production build
npm run build
npm run start:prod

# Run tests
npm test
```

### Frontend Commands
```bash
cd client

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Pages & Routes

- **`/`** - Home page with feature showcase
- **`/signup`** - User registration form
- **`/login`** - User login form (UI only, mock functionality)

## 🔧 Technologies Used

### Backend
- **NestJS** - Progressive Node.js framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **class-validator** - Input validation

### Frontend  
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **React Query** - Data fetching and state management
- **React Router** - Client-side routing
- **Vite** - Build tool

## 🚨 Troubleshooting

### Common Issues

**1. Node.js Version Error**
```
You are using Node.js 22.11.0. Vite requires Node.js version 20.19+ or 22.12+
```
**Solution:** Upgrade Node.js to 22.12+ or use 20.19+

**2. MongoDB Connection Error**
```
MongooseModule: Unable to connect to the database
```
**Solution:** 
- Check if MongoDB is running
- Verify `MONGO_URI` in `.env` file
- Ensure database permissions (for cloud databases)

**3. CORS Error**
```
Access to fetch at 'http://localhost:3000' from origin 'http://localhost:5174' has been blocked
```
**Solution:** Update `FRONTEND_URL` in server `.env` to match your frontend port

**4. Port Already in Use**
```
Port 5173 is in use, trying another one...
```
**Solution:** This is normal - Vite will automatically use the next available port (5174, 5175, etc.)

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Happy coding!** 🎉