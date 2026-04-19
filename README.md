# StyleStore - MERN Monorepo

Full-stack e-commerce application with separate admin dashboard.

## Project Structure

```
StyleStore/
├── backend/          # Node.js + Express + MongoDB
├── frontend/         # React + Vite (Customer facing)
├── admin/           # React + Vite (Admin dashboard)
└── README.md
```

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and other credentials
npm run dev
```

Backend runs on: http://localhost:5000

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:3000

### Admin Setup
```bash
cd admin
npm install
npm run dev
```

Admin runs on: http://localhost:3001

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
