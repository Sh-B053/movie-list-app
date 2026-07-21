# Movie App - React Project

This is a responsive movie web application built with React and TMDB API. The app allows users to browse popular movies, search for specific titles, view movie details (including trailer), and manage a personal list of favorite movies. It also includes a simple authentication system with login and signup functionality using localStorage.

## Features

- Browse popular movies from TMDB
- Search for movies by title
- View detailed movie information with trailer
- Add or remove movies from favorites
- Login and signup with username and password (stored in localStorage)
- Favorites protected by authentication
- Logout functionality and conditional navigation
- Responsive design with clean UI

## Technologies Used

- React
- React Router DOM
- Context API
- Vite
- TMDB API
- localStorage
- CSS Modules

## Project Structure

src/
│
├── components/
│ ├── MovieCard.jsx
│ ├── NavBar.jsx
│ └── ProtectedRoute.jsx
│
├── contexts/
│ └── MovieContext.jsx
│
├── Pages/
│ ├── Home.jsx
│ ├── Favorites.jsx
│ ├── MovieDetails.jsx
│ ├── Login.jsx
│ └── Signup.jsx
│
├── services/
│ └── api.js
│
├── css/
│ └── [All CSS files]
│
├── App.jsx
└── main.jsx


## Getting Started

To run the project locally:

1. Clone the repository:



Users can register using the signup form (username + password)

Credentials are stored in localStorage (user)

Login validates credentials and stores loggedIn = true

Favorites page is protected and only accessible to logged-in users

Logout removes login session

Future Improvements
Connect to real backend (Firebase or Supabase)

Add persistent database for users and favorites

Enhance error handling and form validation

Add user profile page

Add password encryption or token-based auth


