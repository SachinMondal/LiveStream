# Streaming App

This is a web application for live streaming, built using React for the frontend and Flask (Python) for the backend. The application allows users to view live video streams and customize overlay settings.

## Features

- **Live Video Streaming:** Uses Flask to stream video from the device's camera.
- **Overlay Settings:** Customize overlay settings such as content type, position, size, and more.
- **CRUD Operations:** Implement CRUD (Create, Read, Update, Delete) functionality for overlay settings.

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- [Python](https://www.python.org/downloads/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed (for future integration)

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/SachinMondal/LiveStream.git
    cd streaming-app
    ```

2. **Install Dependencies:**

    ```bash
    # Install frontend dependencies
    cd frontend
    npm install

    # Install backend dependencies
    cd ../backend
    pip install -r requirements.txt
    ```

3. **Run the Application:**

    ```bash
    # Run frontend (React)
    cd ../frontend
    npm start

    # Run backend (Flask)
    cd ../backend
    python app.py
    ```

    The application should now be accessible at [http://localhost:3000](http://localhost:3000).

## Folder Structure

- **backend:** Contains Flask application files for the backend.
- **frontend:** Contains React application files for the frontend.

## Backend (Flask, MongoDB)

- Set up a Flask application to handle the backend logic.
- Use Flask to create CRUD endpoints for overlays and settings.
- Connect Flask to MongoDB to store overlay settings.
- Implement logic to handle creating, reading, updating, and deleting overlay settings in the MongoDB database.

## Frontend (React)

- Use React to create components for the user interface.
- Implement responsive design using Tailwind CSS.
- Integrate video streaming from the Flask backend.
- Allow users to customize overlay settings.

## Troubleshooting

- If you encounter issues, refer to the troubleshooting section in this README.

## License

This project is licensed under the [MIT License](LICENSE).
