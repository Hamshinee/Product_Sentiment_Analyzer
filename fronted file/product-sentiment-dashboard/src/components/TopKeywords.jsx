function TopKeywords() {

  const keywords = [
    "Camera",
    "Battery",
    "Performance",
    "Display",
    "Price",
    "Quality",
    "Excellent",
    "Fast",
    "Design",
    "Charging"
  ];

  return (
    <div className="keywords-container">
      <h2>Top Keywords</h2>

      <div className="keyword-list">
        {keywords.map((word, index) => (
          <span key={index} className="keyword">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TopKeywords;