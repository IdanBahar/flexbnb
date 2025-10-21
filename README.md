[flexbnb_readme.md](https://github.com/user-attachments/files/23027359/flexbnb_readme.md)
# Flexbnb — Airbnb-Inspired Full-Stack Booking Platform

Flexbnb is a full-stack, production-style accommodation booking platform designed to deliver a polished, seamless experience for both guests and hosts. Combining a modern, responsive frontend with a robust Node.js/Express backend, Flexbnb features secure authentication, real-time communication, and a scalable architecture.

## Live Demo

🌐 [Flexbnb Live Demo](https://flexbnb-karin.onrender.com)

## Key Features

- **User Authentication:** Secure login and signup with email/password and OAuth options
- **Dynamic Search:** Filter homes by location, dates, and number of guests
- **Home Details:** High-quality images, amenities, reviews, and integrated maps
- **Booking Flow:** Interactive booking process with confirmation and success feedback
- **Host Dashboard:** Manage listings, approve or decline requests, and track bookings
- **Real-Time Communication:** Instant notifications and messaging using WebSockets
- **Wishlist:** Persistent favorites stored in MongoDB
- **Responsive, Pixel-Perfect Design:** High-fidelity UI built with React and Redux

## Backend Architecture

- **Server:** Node.js + Express with modular, RESTful API structure
- **Database:** MongoDB + Mongoose for data modeling and queries
- **Real-Time Features:** WebSockets for live updates between clients
- **Image Management:** Cloudinary integration for efficient media storage
- **Middleware:** Authentication, input validation, and error handling

## Tech Stack

- **Frontend:** React, Redux, HTML, CSS, JavaScript
- **Backend:** Node.js, Express, REST API
- **Database:** MongoDB, Mongoose
- **Real-Time Communication:** Socket.io
- **Media Storage:** Cloudinary
- **Version Control:** Git & GitHub workflow

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/flexbnb.git
cd flexbnb
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend folder with the following variables:

```
MONGODB_URI=<your_mongodb_connection_string>
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
JWT_SECRET=<your_jwt_secret>
```

5. Run the backend server:

```bash
cd ../backend
npm run dev
```

6. Run the frontend (React/Vite):

```bash
cd ../frontend
npm run dev
```

7. Access the application at `http://localhost:5173`

## Team Collaboration

Developed collaboratively by a team of three:

- Feature development in dedicated branches
- Regular pull requests and code reviews
- Coordinated frontend-backend integration
- Version control best practices to ensure consistency and maintainability

## Highlights

- Full-stack, production-ready architecture
- Clean API separation with scalable backend logic
- Real-time updates with WebSockets
- Strong emphasis on UX and responsive, pixel-perfect design
- Demonstrates teamwork, technical depth, and maintainable coding practices

## Project Structure

```
frontend/      # React + Redux frontend
backend/       # Node.js + Express backend
  |-- routes/  # API routes
  |-- models/  # MongoDB models
  |-- controllers/ # Request handlers
  |-- services/    # Utility functions and integrations
```

## Contact

Built by Idan Bahar — passionate about creating seamless full-stack applications combining design, functionality, and performance.

