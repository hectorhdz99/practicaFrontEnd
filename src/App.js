import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import AppToolBar from "./components/AppBar";
import Content from "./pages/content";
function App() {
  return (
    <Router>
      <AppToolBar />
      <Content/>
    </Router>
  );
}

export default App;
