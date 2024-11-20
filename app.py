from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"User: {user_input}\nAssistant:",
        max_tokens=150,
        temperature=0.7,
    )
    reply = response['choices'][0]['text'].strip()
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
