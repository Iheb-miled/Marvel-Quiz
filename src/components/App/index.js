import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../App.css';
import ErrorPage from '../ErrorPage';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp';
import Welcome from '../Welcome';
import forgetPassword from '../ForgetPassword';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/forget-password" component={forgetPassword} />
          <Route component={ErrorPage} /> {/*en cas d'erreur il ramne vers error Page*/}
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
