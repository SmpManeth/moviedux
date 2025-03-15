import "./App.css";
import "./styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>

      <footer className="footer">
        <p>© 2021 Movie Dux. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
