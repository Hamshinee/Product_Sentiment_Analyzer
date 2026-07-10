function StatsCards() {
  return (
    <div className="stats-container">

      <div className="card">
        <h3>Total Reviews</h3>
        <p>500</p>
      </div>

      <div className="card positive">
        <h3>Positive</h3>
        <p>320</p>
      </div>

      <div className="card neutral">
        <h3>Neutral</h3>
        <p>90</p>
      </div>

      <div className="card negative">
        <h3>Negative</h3>
        <p>90</p>
      </div>

    </div>
  );
}

export default StatsCards;