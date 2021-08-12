import '../App.css';
import Picture from './Picture';
import Skills from './Skills';
//import {  HashRouter, Link, Switch, Route } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="App">
      <h1>Daniel Daher</h1>
      <Picture />
      <Skills />
    </div>
  );
}

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