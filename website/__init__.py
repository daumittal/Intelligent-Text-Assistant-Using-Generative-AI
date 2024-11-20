from flask import Flask

def create_app():
    #Creating new App
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "Simple Secret Key"
    return app