import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
