import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StatsCards from "./components/StatsCards";
import DashboardTitle from "./components/DashboardTitle";
import SentimentChart from "./components/SentimentChart";
import ReviewsTable from "./components/ReviewsTable";
import MonthlyChart from "./components/MonthlyChart";
import TopKeywords from "./components/TopKeywords";
import ReviewCards from "./components/ReviewCards";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <DashboardTitle />
      <StatsCards/>
      <SentimentChart />
      <ReviewsTable />
      <MonthlyChart />
      <TopKeywords />
      <ReviewCards />
      <Footer />
    </>
  );
}

export default App;

