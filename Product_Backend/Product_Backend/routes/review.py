from flask import Blueprint, jsonify

review_bp = Blueprint("review", __name__)

@review_bp.route("/reviews", methods=["GET"])
def get_reviews():
    return jsonify({
        "status": "success",
        "message": "Review API is working!"
    })