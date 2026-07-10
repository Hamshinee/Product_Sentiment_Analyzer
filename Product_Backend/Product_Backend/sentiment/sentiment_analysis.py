from textblob import TextBlob

review = input("Enter a review: ")

blob = TextBlob(review)

polarity = blob.sentiment.polarity

print("Polarity:", polarity)

if polarity > 0:
    print("Sentiment: Positive")
elif polarity < 0:
    print("Sentiment: Negative")
else:
    print("Sentiment: Neutral")