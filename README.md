#### Task Manager Application

A MERN stack task management application with authentication, role-based access control (Admin/User), task CRUD operations, and statistics dashboard.

### Features of Task Manager

## **Admin Features:**
1. **User Management:**
    - Create admin accounts.
    - Add and manage team members.

2. **Task Assignment:**
    - Assign tasks to individual.
    - Update task details and status.

3. **Task Properties:**
    - Label tasks as todo, in progress, or completed.
    - Assign priority levels (high, medium,low).

5. **User Account Control:**
    - Permanently delete or trash tasks.

## **User Features:**
1. **Task Interaction:**
    - Create and update thier own tasks
    - Change task status (in progress or completed).
    - View detailed task information.

## **General Features:**
1. **Authentication and Authorization:**
    - User login with secure authentication.
    - Role-based access control.
2. **CRUD**
    -perform crud methods on the tasks
    -view and edit the task 
    -update the stautus
    -user can turn into admin by single acknowlgment from admin

4. **Dashboard:**
    - Provide a summary of user activities.
    - Filter tasks into todo, in progress, or completed.

### Folder structure of Task Manager

task-manager/
│── client/                        # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── api/                   # Axios API calls
│   │   ├── components/            # Reusable UI components (Buttons, Modals, etc.)
│   │   ├── hooks/                 # Custom React hooks (useAuth, useTasks, etc.)
│   │   ├── layouts/               # Layouts (AuthLayout, DashboardLayout, etc.)
│   │   ├── pages/                 # Pages (Login, Register, Tasks, Admin, Stats)
│   │   ├── routes/                # ProtectedRoute, RoleBasedRoute
│   │   ├── utils/                 # Helper functions (formatDate, validateForm, etc.)
│   │   ├── App.jsx                # Main app entry
│   │   └── main.jsx               # React root
│   └── package.json
│
│── server/                        # Backend (Express + MongoDB)
│   ├── config/                    # DB config, JWT utils
│   ├── controllers/               # Business logic (auth, tasks, users)
│   ├── middleware/                # Auth middleware, error handling
│   ├── models/                    # Mongoose schemas (User, Task, ActivityLog)
│   ├── routes/                    # API routes
│   ├── tests/                     # Backend tests (Jest / Supertest)
│   └── index.js                   # Entry point
│   └── package.json
│
│── .env.example                   # Env variables template
│── README.md                      # Project documentation

## **Technologies Used:**
- **Frontend:**
    - React (Vite)
    - Tailwind CSS

- **Backend:**
    - Node.js with Express.js
    
- **Database:**
    - MongoDB for efficient and scalable data storage.




## INSTALLATION

## Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:

- MONGODB_URI = `your MongoDB URL`
- JWT_SECRET = `any secret key - must be secured`
- PORT = `8800` or any port number
- NODE_ENV = `development`

## Steps to run server


1. Navigate into the server directory `cd server`.
2. Run `npm i` or `npm install` to install the packages.
3. Run `npm run start` to start the server.

If configured correctly, you should see a message indicating that the Server is running on port xyz and MongoDB connected

## Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm i` or `npm install` to install the packages.
3. Run `npm run dev`

📡 API Specification

### Auth Endpoints

1. POST /auth/register → Register new user

2. POST /auth/login → Login user

3. POST /auth/logout → Logout

### User Endpoints (Admin only)

1. GET /users → List all users

2. PATCH /users/:id/role → Update user role

### Task Endpoints

1. GET /tasks → Get tasks (filters, search, pagination)

2. POST /tasks → Create task

3. PATCH /tasks/:id → Update task

4. DELETE /tasks/:id → Delete task


`While building this project, a few design and implementation choices were made with pros and cons:`

### Authentication with JWT (vs. sessions/cookies)
✅ Easier to scale since JWT is stateless and works well across services.
❌ Requires extra care for security (e.g., token expiry, refresh tokens).

### Single login for both Admin & User roles (vs. separate portals)
✅ Simple to implement — both roles share the same authentication system.
❌ Less flexibility if the system grows (e.g., separate admin dashboard in the future).

### React + Vite + Tailwind (vs. Next.js or CRA)
✅ Very fast development environment with easy-to-use styling.
❌ No built-in Server-Side Rendering (SEO not prioritized for this project).

### Centralized API layer (axios inside /api/) (vs. calling APIs directly in components)
✅ Cleaner, more reusable code and easier to update later.
❌ Slight overhead in setup.

### Frontend & Backend in the same repo (vs. fully separate repos)
✅ Easier to manage for a small/medium project.
❌ Less modular and harder to scale in very large teams.

### Skipping Docker setup
✅ Simpler for local development — just run npm run dev.
❌ Less portable for deployment in containerized environments.