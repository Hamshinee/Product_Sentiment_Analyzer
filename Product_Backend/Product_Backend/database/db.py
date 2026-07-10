import psycopg2

def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="product_sentiment_db",
        user="postgres",
        password="1178@17",
        port="5432"
    )