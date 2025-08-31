# Tictik: A Task Management Web App

To-Tick is a responsive and visually appealing task management web app built with React. It includes features such as user authentication (Login/Signup), task prioritization, due dates, and persistent task storage using the browser's `localStorage`. The app is styled with a sapphire-blue theme and supports both light and dark modes.

---

## Features

- **User Authentication**: Login and Signup pages with validation.
- **Task Management**:
- Add tasks with titles, priorities (Low, Medium, High), and due dates.
- View, filter, and delete tasks.
- Persistent storage using `localStorage`.
- **Responsive Design**:
- Mobile-friendly with the use of media queries.
- Beautiful sapphire-blue theme with white, black, and dark grey accents.
- **Dark Mode**: Toggle between light and dark themes.
- **Modern Styling**: Google Fonts (Roboto) and icons from `react-icons`.

---

## Technologies Used

- **React**: For building the user interface and routing.
- **React Router**: For navigation between pages (Login, Signup, Tasks).
- **React Icons**: For adding icons to enhance UI/UX.
- **CSS3**: For styling and responsive design.
- **localStorage**: For saving user data and tasks persistently.

---

## Folder Structure
To-Tick/├── public/│ └── index.html # Base HTML template with Google Fonts├── src/│ ├── components/│ │ ├── Login.js # Login page component│ │ ├── Signup.js # Signup page component│ │ ├── TaskList.js # Tasks page component│ ├── styles/│ │ └── global.css # Global styles (theme, fonts, etc.)│ ├── App.js # Main app with routing│ └── index.js # ReactDOM render├── README.md # Project documentation└── package.json # Dependencies and scripts

---

## How to Run the Project

### Prerequisites
- Node.js (v18 or later)
- npm (Node Package Manager)

### Steps to Run Locally

1. **Clone the repository**:
```bash
git clone https://github.com/DebbyA007/Tictick.git
cd To-Tick

# Install dependencies:
npm install

#  Run the development server:
npm start

# Open your browser and navigate to http://localhost:3000.

# Deployment
# Deploy to GitHub Pages
# Add the homepage field in package.json: 
"homepage": "https://DebbyA007.github.io/To-Tick"

# Build the app:

npm run build
