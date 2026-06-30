````markdown
# 🚀 GenAI + Full Stack

A full-stack AI-powered interview preparation platform that helps users generate personalized interview reports using their resume, self-description, and job description. The application analyzes candidate-job compatibility, identifies skill gaps, generates technical and behavioral interview questions, creates a structured preparation roadmap, and produces a tailored resume PDF.

---

## ✨ Features

- 🔐 User registration, login, and logout
- 🛡️ JWT Authentication with HTTP-only cookies
- 📄 Resume PDF upload and parsing
- 🤖 AI-powered interview report generation using Google GenAI
- 📊 Candidate-job match score
- 💻 Technical interview questions with answer guidance
- 🗣️ Behavioral interview questions with answer guidance
- 📈 Skill gap analysis with severity levels
- 📅 Personalized day-wise interview preparation plan
- 📚 View previous interview reports
- 📄 Generate tailored resume PDF from interview reports

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Sass (SCSS)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- pdf-parse
- Puppeteer
- Google GenAI
- Zod

---

## 📂 Project Structure

```text
GenAI+Full_stack/
│
├── Back-end/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── package.json
│   └── server.js
│
└── Front-end/
    ├── src/
    │   ├── features/
    │   │   ├── auth/
    │   │   └── interview/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB
- Google GenAI API Key

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/GenAI-Full-Stack.git
cd GenAI-Full-Stack
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd Back-end
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the **Back-end** directory:

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:3000
```

---

## Frontend Setup

Open a new terminal.

Navigate to the frontend folder:

```bash
cd Front-end
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/logout` | Logout user |
| GET | `/api/auth/get-me` | Get logged-in user details |

---

## Interview

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/interview/` | Generate interview report |
| GET | `/api/interview/` | Get all interview reports |
| GET | `/api/interview/report/:interviewId` | Get a specific interview report |
| POST | `/api/interview/resume/pdf/:interviewReportId` | Generate tailored resume PDF |

---

# ⚙️ How It Works

1. User registers or logs into the application.
2. Uploads a resume in PDF format.
3. Provides a self-description.
4. Pastes the target job description.
5. Backend extracts text from the uploaded resume.
6. Google GenAI analyzes all provided information.
7. A detailed interview report is generated, including:
   - Candidate-job match score
   - Technical interview questions
   - Behavioral interview questions
   - Skill gap analysis
   - Personalized preparation roadmap
8. Users can revisit previous reports or generate a customized resume PDF.

---

# 🔑 Environment Variables

Create a `.env` file inside the **Back-end** directory.

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used for JWT authentication |
| `GOOGLE_GENAI_API_KEY` | Google GenAI API key |

---

# 📜 Available Scripts

## Backend

Start development server:

```bash
npm run dev
```

---

## Frontend

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

---

# 🚀 Future Improvements

- Better validation and error handling
- Password reset functionality
- Delete interview reports
- Loading indicators during AI generation
- Progress tracking for long-running AI tasks
- Cloud deployment configuration
- Unit and integration testing
- Email verification
- AI interview chat assistant
- Interview analytics dashboard

---

# 👨‍💻 Author

**Built by Your Name**

---

# 📄 License

This project is licensed under the **ISC License**.
````
