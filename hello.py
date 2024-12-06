from flask import Flask

app = Flask(__name__)

# Route with a URL parameter
@app.route('/greet/<name>')
def greet(name):
    return f"Hello, {name}! Welcome to the Flask app."

if __name__ == '__main__':
    app.run(debug=True)
