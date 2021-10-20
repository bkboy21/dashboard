
import './App.css';
import './styles.css';
import Reviews from "./Components/Reviews"
import Sidebar from "./Components/Sidebar"
import WebsiteVisitors from "./Components/WebsiteVisitors"
import SentimentAnalysis from "./Components/SentimentAnalysis"
import AverageRating from "./Components/AverageRating"



function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Reviews/>
      <WebsiteVisitors/>
      <SentimentAnalysis/>
      <AverageRating/>
    </div>
  );
}

export default App;
