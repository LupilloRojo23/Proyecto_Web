from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import youtube as py

app = Flask(__name__)
CORS(app)  # Habilita CORS

@app.route('/')

def index():
    return render_template('index.html')  # Sirve el archivo HTML desde Flask

@app.route('/api/data', methods=['POST'])
def received_data():
    link = request.get_json()
    link_url = link['name']
    py.download_video(link_url)
    return jsonify({'received_data':'Descarga Completada'})

if __name__ == '__main__':
    app.run(debug=True)