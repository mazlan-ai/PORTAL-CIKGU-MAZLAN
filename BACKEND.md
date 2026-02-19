# Struktur Folder Backend

## Setup Instructions

### 1. Install Dependencies
npm install

### 2. Setup Environment Variables
cp .env.example .env

Edit .env dan isikan:
PORT=5000
NODE_ENV=development
DB_URI=mongodb://localhost:27017/portal-cikgu-mazlan
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-secret-key
YOUTUBE_API_KEY=your-youtube-api-key

### 3. Run Development Server
npm run dev

Server akan berjalan di: http://localhost:5000

## API Endpoints

### Authentication
- POST /api/auth/google - Google OAuth login
- GET /api/auth/profile - Get user profile
- POST /api/auth/logout - Logout
- GET /api/auth/users - Get all users (admin only)

### Videos
- GET /api/videos - Get all videos
- GET /api/videos/tingkatan/:tingkatan - Get videos by tingkatan
- GET /api/videos/tingkatan/:tingkatan/kelas/:kelas - Get videos by tingkatan & kelas
- POST /api/videos - Upload new video (admin only)
- PUT /api/videos/:id - Update video (admin only)
- DELETE /api/videos/:id - Delete video (admin only)