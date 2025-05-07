# CourseGPT

CourseGPT is an AI-powered web app that generates detailed lesson plans on any topic using the OpenAI API. It’s built with a Node.js + Express backend, React frontend, and MongoDB database.

## Features

- Generate lessons with title, description, outcomes, concepts, and activities
- Store & view all generated lessons
- Simple and clean React interface
- Scalable architecture with MongoDB

## Project Structure

/coursegpt
/backend → Node.js, Express, MongoDB, OpenAI API
/frontend → React, React Hooks, Components

2️⃣ Setup Backend
    cd backend
    npm install
    
Create a .env file in /backend:
    OPENAI_API_KEY=your_openai_api_key
    MONGO_URI=mongodb://localhost:27017/coursegpt
    
Start the backend:
    npm start
    
3️⃣ Setup Frontend
    cd ../frontend
    npm install
    
Create a .env file in /frontend:
    REACT_APP_BACKEND_URL=http://localhost:5000
    
Start the frontend:
    npm start

🌟 Future Improvements
    Add user authentication
    Enable edit/delete/export (PDF/Markdown)
    Add search, filters, pagination
    Improve AI prompt for richer lessons


🙌 Built With
    OpenAI API
    React
    Express
    MongoDB








