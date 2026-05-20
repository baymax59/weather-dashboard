from flask import Flask, render_template, jsonify
import http.client
import json

app = Flask(__name__)

API_KEY = "b0287c4c4dmshfb4bb008aa5c6f2p16d94ejsnca988355c871"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/weather')
def weather():

    conn = http.client.HTTPSConnection(
        "weatherapi-com.p.rapidapi.com"
    )

    headers = {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': "weatherapi-com.p.rapidapi.com"
    }

    conn.request(
        "GET",
        "/current.json?q=London",
        headers=headers
    )

    res = conn.getresponse()

    data = res.read()

    weather_data = json.loads(
        data.decode("utf-8")
    )

    print(weather_data)

    return jsonify(weather_data)

if __name__ == '__main__':
    app.run(debug=True)