from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow frontend to connect (important if HTML runs separately)
CORS(app)

# Contact form API
@app.route("/contact", methods=["POST"])
def contact():

    try:
        data = request.json

        name = data.get("name")
        email = data.get("email")
        message = data.get("message")
        code = data.get("code")

        # Show in terminal
        print("\n===== NEW CONTACT MESSAGE =====")
        print("Name:", name)
        print("Email:", email)
        print("Message:", message)
        print("Code:", code)
        print("==============================\n")

        return jsonify({
            "success": True,
            "message": "Message received successfully!"
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })


# Run server
if __name__ == "__main__":
    app.run(debug=True, port=5000)