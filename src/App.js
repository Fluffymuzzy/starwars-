import "./styles/App.css";
import Header from "./pages/Header/Header";
import GameArea from "./pages/GameArea/GameArea";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <GameArea />
      <Footer />
    </div>
  );
}

export default App;
