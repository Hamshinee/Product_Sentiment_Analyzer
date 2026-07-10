function ReviewCards() {
  const reviews = [
    {
      product: "iPhone 15",
      review: "Amazing camera quality and battery backup.",
      sentiment: "Positive"
    },
    {
      product: "Samsung S24",
      review: "Good performance but slightly expensive.",
      sentiment: "Neutral"
    },
    {
      product: "OnePlus 12",
      review: "Heating issue after continuous usage.",
      sentiment: "Negative"
    }
  ];

  return (
    <div className="review-section">
      <h2>Latest Reviews</h2>

      <div className="review-container">

        {reviews.map((item, index) => (

          <div className="review-card" key={index}>

            <h3>{item.product}</h3>

            <p>{item.review}</p>

            <span className={item.sentiment.toLowerCase()}>
              {item.sentiment}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ReviewCards;