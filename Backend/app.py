from flask import Flask,request,jsonify, send_file
from flask_cors import CORS
from sample_pyton import change_file_name
    # Extract the di
import time
import os
app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    option1 = request.form['option1']
    option2 = request.form['option2']
    if file:
        filename = file.filename
        folder_path = r'C:\Users\asust\Downloads\NUS Website\nus_project\Backend\docs'
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
        file_path = os.path.join(folder_path, filename)
        file.save(file_path)
        modified_file_path = change_file_name(file_path, "mywish.pdf")
        print(type(modified_file_path))
        response = {
            'option1': option1,
            'option2': option2,
            'filename': modified_file_path
        }
        return jsonify(response)
    response = {'message': 'Form fields are not complete'}
    return jsonify(response)

@app.route('/download', methods=['GET'])
def download_file():
    filename = request.args.get('filename')
    folder_path = r'C:\Users\asust\Downloads\NUS Website\nus_project\Backend\docs'
    file_path = os.path.join(folder_path, filename)
    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    app.run()