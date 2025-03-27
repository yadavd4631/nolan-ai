Project Name: NolanAI – Film Production Web App 🎬✨

Tech Stack: React.js, Firebase Authentication, React Router, Tailwind CSS, React Toastify

🔹 Overview

NolanAI is a collaborative film production suite designed to assist users in managing their film projects from concept to production. The platform allows users to sign up, log in securely, and navigate through different sections like Home, Dashboard, and About.

🎯 Key Features

User Authentication (Firebase)

Users can sign up and log in using Firebase Authentication.

Unauthorized users are restricted from accessing protected pages.

Login sessions are managed using localStorage.

Protected Routes (React Router)

Users cannot access Dashboard, Home, or About without logging in.

Redirects users to the login page if they try to access restricted content.

Dynamic Navigation Bar (React Router NavLink)

Displays different UI states based on whether the user is logged in.

Highlights the active page with a color change.

Provides a Logout button that clears the session.

Video Player Integration (React Player)

The Home page features a video using ReactPlayer to enhance user engagement.

Interactive Notifications (React Toastify)

Users receive real-time notifications (e.g., login success, logout confirmation).

Smooth Navigation Experience

Clicking Start Creation redirects users to the Dashboard.

Uses useNavigate() for seamless page transitions.

🛠️ How It Works
User Authentication:

New users sign up and create an account.

Returning users log in to access their dashboard.

Authentication is handled via Firebase.

Navigation & Access Control:

Once logged in, users can explore Home, Dashboard, and About pages.

If a user is not logged in, they are redirected to the Login page.

Film Project Management:

The Dashboard provides tools for managing film projects (future expansion).

Video content is displayed on the Home page.
