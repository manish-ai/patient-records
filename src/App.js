import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { Provider } from 'react-redux'
import store from "./Redux/store";
export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}
