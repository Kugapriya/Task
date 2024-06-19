
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthService from './assets/Components/Auth/AuthService';
import PrivateRoute from './Components/Common/PrivateRoute';
import Navbar from './assets/Components/Common/NavBar';
import Login from './assets/Components/Auth/Login';
import Register from './assets/Components/Auth/Register';
import TaskList from './assets/Components/Task/TaskList';

function App() {
  const currentUser = AuthService.getCurrentUser();

  return (
    <Router>
      <div className="App">
        <Navbar currentUser={currentUser} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/tasks" component={TaskList} />
            {/* Add more routes for task details, edit, etc. */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
