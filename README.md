🎓 MediQueue - Tutorial Booking Platform

A full-stack tutorial booking platform where students can browse tutorials, book sessions, enroll in courses, and manage their learning journey. The platform includes secure authentication, protected routes, and a modern responsive UI.

🌐 Live Demo
🔗 Frontend: https://mediqueflow-client-cc33.vercel.app
🔗 Backend: https://medique-server-nine.vercel.app
📌 Features
🔐 Secure Authentication (Email + Password)
🔵 Google OAuth Login
🔒 JWT Protected API Routes
📚 Browse Tutorials
🔍 Search Tutorials by Title
➕ Add New Tutorials
📅 Book Sessions
🎓 Enroll in Tutorials
📊 Personal Dashboard
🗄️ MongoDB Integration
📱 Fully Responsive UI
🛠️ Tech Stack
Frontend
Next.js
React
Tailwind CSS
Better Auth Client
React Hot Toast
Backend
Node.js
Express.js
MongoDB
Better Auth
JOSE (JWT)
🔐 Environment Variables
Frontend (.env.local)


⚠️ Important

Never commit .env files
Never expose API keys or OAuth secrets
Always use .gitignore
📡 API Endpoints
Tutorials
GET    /tutorals
GET    /tutorals/:id
GET    /availabletutorials
POST   /addtutorals
Enrollment
PATCH  /enroll/:id
Bookings
GET    /mybookings
🔐 Authentication Flow
Email/Password Login (Better Auth)
Google OAuth Login
JWT Session Handling
Protected Routes Middleware
📁 Project Structure
frontend/
├── app/
├── components/
├── lib/
├── hooks/
├── utils/

backend/
├── index.js
├── middleware/
├── config/
├── routes/
🚀 Future Improvements
⭐ Ratings & Reviews System
💳 Payment Integration
👨‍🏫 Tutor Profiles
🧑‍💼 Admin Dashboard
📈 Progress Tracking
🔔 Notification System
👨‍💻 Author

AL AMIN
GitHub: https://github.com/arifislam121416