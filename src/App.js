import './App.css';
import Homepage from './Pages/Homepage';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-content">
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* return(
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopPage}/>
      <Route  exact path="/checkout" component={CheckOut}/>
      <Route  path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}/>
    </Switch>
  </div> */