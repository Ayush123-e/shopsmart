# StyleStore - MERN Monorepo

Full-stack e-commerce application with separate admin dashboard.

## Project Structure

```
StyleStore/
├── server/           # Node.js + Express + MongoDB
├── client/           # React + Vite (Customer facing)
├── admin/            # React + Vite (Admin dashboard)
└── README.md
```

## Setup Instructions

### Server Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and other credentials
npm run dev
```

Server runs on: http://localhost:4000

### Client Setup
```bash
cd client
npm install
npm run dev
```

Client runs on: http://localhost:3000

### Admin Setup
```bash
cd admin
npm install
npm run dev
```

Admin runs on: http://localhost:3002

## API Endpoints

- `GET /api/health` - Health check endpoint

## Technologies

### Backend
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Multer for file uploads
- Cloudinary for image storage

### Frontend & Admin
- React 18
- Vite
- React Router
- Axios
