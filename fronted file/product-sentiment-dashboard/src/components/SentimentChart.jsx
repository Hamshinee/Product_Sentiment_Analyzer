import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Positive", value: 320 },
  { name: "Neutral", value: 90 },
  { name: "Negative", value: 90 },
];

const COLORS = ["#4CAF50", "#FFC107", "#F44336"];

function SentimentChart() {
  return (
    <div className="chart-container">
      <h2>Sentiment Distribution</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default SentimentChart;