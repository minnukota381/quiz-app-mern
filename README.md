# quiz-app-mern

```sh
quiz-app-mern/
├── client/            // Frontend React app
│   ├── public/
│   ├── src/
│   │   ├── components/     // React components
│   │   ├── pages/          // React pages (e.g., Home, Quiz, Admin)
│   │   ├── services/       // API service integration (Axios, Fetch)
│   │   ├── App.js          // Main React component
│   │   ├── index.js        // Entry point for React app
│   │   └── ...
│   ├── package.json      // Frontend dependencies and scripts
│   └── ...
├── server/            // Backend Node.js server
│   ├── models/          // Mongoose models (User, Quiz, Question)
│   ├── routes/          // Express routes (API endpoints)
│   ├── controllers/     // Logic handling for routes
│   ├── config/          // Configuration files (e.g., MongoDB connection)
│   ├── app.js           // Entry point for Express server
│   ├── package.json     // Backend dependencies and scripts
│   └── ...
├── package.json       // Root level package.json for managing both frontend and backend
└── README.md          // Project documentation
```