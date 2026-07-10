from flask import Blueprint, request, jsonify
from textblob import TextBlob

sentiment_bp = Blueprint("sentiment", __name__)

@sentiment_bp.route("/sentiment", methods=["POST"])
def get_sentiment():

    data = request.get_json()

    review = data.get("review", "")

    blob = TextBlob(review)

    polarity = blob.sentiment.polarity

    if polarity > 0:
        sentiment = "Positive"
    elif polarity < 0:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"

    return jsonify({
        "review": review,
        "sentiment": sentiment,
        "polarity": polarity
    })