import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    month: "Jan",
    Positive: 80,
    Neutral: 20,
    Negative: 10,
  },
  {
    month: "Feb",
    Positive: 90,
    Neutral: 15,
    Negative: 12,
  },
  {
    month: "Mar",
    Positive: 110,
    Neutral: 25,
    Negative: 18,
  },
  {
    month: "Apr",
    Positive: 130,
    Neutral: 20,
    Negative: 15,
  },
];

function MonthlyChart() {
  return (
    <div className="monthly-chart">
      <h2>Monthly Sentiment Analysis</h2>

      <BarChart
        width={700}
        height={350}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />
        <Legend />

        <Bar dataKey="Positive" fill="#4CAF50" />
        <Bar dataKey="Neutral" fill="#FFC107" />
        <Bar dataKey="Negative" fill="#F44336" />
      </BarChart>
    </div>
  );
}

export default MonthlyChart;