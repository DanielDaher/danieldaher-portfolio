import './App.css';
import Homepage from './Components/Homepage';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Homepage} />
        </Switch>
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