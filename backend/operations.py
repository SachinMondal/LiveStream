from flask_pymongo import PyMongo

app.config['MONGO_URI'] = 'mongodb://localhost:27017/your-database-name'
mongo = PyMongo(app)
from flask import jsonify, request

@app.route('/overlay', methods=['POST'])
def create_overlay():
    overlay_data = request.json
    mongo.db.overlays.insert_one(overlay_data)
    return jsonify({'message': 'Overlay created successfully'})

@app.route('/overlay/<overlay_id>', methods=['GET'])
def get_overlay(overlay_id):
    overlay = mongo.db.overlays.find_one({'_id': ObjectId(overlay_id)})
    return jsonify(overlay)

@app.route('/overlay/<overlay_id>', methods=['PUT'])
def update_overlay(overlay_id):
    updated_data = request.json
    mongo.db.overlays.update_one({'_id': ObjectId(overlay_id)}, {'$set': updated_data})
    return jsonify({'message': 'Overlay updated successfully'})

@app.route('/overlay/<overlay_id>', methods=['DELETE'])
def delete_overlay(overlay_id):
    mongo.db.overlays.delete_one({'_id': ObjectId(overlay_id)})
    return jsonify({'message': 'Overlay deleted successfully'})

@app.route('/overlays', methods=['GET'])
def get_all_overlays():
    overlays = list(mongo.db.overlays.find())
    return jsonify(overlays)
