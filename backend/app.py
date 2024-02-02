from flask import Flask, render_template, Response
import cv2
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)
rtsp_url = "http://158.58.130.148:80/mjpg/video.mjpg"
camera = cv2.VideoCapture(rtsp_url)

def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpeg', frame)
            frame = buffer.tobytes()
        yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video')
def video():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(debug=True)
