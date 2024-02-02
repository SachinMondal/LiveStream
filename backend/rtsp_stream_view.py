from flask import Flask, render_template, Response
from flask_socketio import SocketIO
import cv2
from threading import Thread
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, async_mode='eventlet')  # Explicitly set the async mode

# Initialize the video capture
camera = cv2.VideoCapture("http://158.58.130.148:80/mjpg/video.mjpg")

# Function to read frames and emit them to clients
def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpeg', frame)
            frame = buffer.tobytes()
        socketio.emit('video_feed', {'data': frame})

# Start a separate thread for video streaming
video_thread = Thread(target=generate_frames)
video_thread.daemon = True
video_thread.start()

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Start the Flask app with SocketIO
if __name__ == "__main__":
    socketio.run(app, debug=True)
