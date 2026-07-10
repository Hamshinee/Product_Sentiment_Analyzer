from flask import Flask
from routes.search import search_bp
from routes.review import review_bp
from routes.sentiment import sentiment_bp
from routes.dashboard import dashboard_bp
app = Flask(__name__)
app.register_blueprint(search_bp)
app.register_blueprint(review_bp)
app.register_blueprint(sentiment_bp)
app.register_blueprint(dashboard_bp)
@app.route("/")
def home():
    return "Backend Running Successfully!"

if __name__ == "__main__":
    app.run(debug=True)