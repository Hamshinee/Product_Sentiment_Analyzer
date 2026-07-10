from flask import Blueprint, request, jsonify
from database.db import get_connection

search_bp = Blueprint("search", __name__)

@search_bp.route("/search", methods=["POST"])
def search():
    data = request.get_json()

    product_name = data.get("product_name")

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT p.product_name,
               r.review_text,
               s.sentiment,
               s.confidence_score
        FROM products p
        JOIN reviews r
            ON p.product_id = r.product_id
        JOIN sentiment_results s
            ON r.review_id = s.review_id
        WHERE LOWER(p.product_name) = LOWER(%s)
    """, (product_name,))

    result = cur.fetchone()

    cur.close()
    conn.close()

    if result:
        return jsonify({
            "product_name": result[0],
            "review": result[1],
            "sentiment": result[2],
            "confidence_score": float(result[3])
        })

    return jsonify({"message": "Product not found"})