import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
export default function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}
