function ReviewsTable() {

  const reviews = [
    {
      product: "iPhone 15",
      review: "Excellent camera and battery life.",
      sentiment: "Positive"
    },
    {
      product: "Samsung S24",
      review: "Good phone but a little expensive.",
      sentiment: "Neutral"
    },
    {
      product: "Laptop",
      review: "Poor performance and heating issue.",
      sentiment: "Negative"
    }
  ];

  return (
    <div className="table-container">

      <h2>Recent Product Reviews</h2>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Review</th>
            <th>Sentiment</th>
          </tr>
        </thead>

        <tbody>

          {reviews.map((item, index) => (

            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.review}</td>
              <td>{item.sentiment}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ReviewsTable;