import './App.css';
import Homepage from "./pages/Main/Index.js";
import Auth from "./pages/Auth/Index";
import Final from "./pages/Final/Index";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/Test" component={Homepage} />
          <Route exact path="/End" component={Final} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
