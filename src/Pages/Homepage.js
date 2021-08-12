import '../App.css';
import Picture from '../Components/Picture';
import Skills from '../Components/Skills';

export default function Homepage() {
  return (
    <div className="info">
      <Picture />
      <p>
        Brasileiro, mineiro e belo-horizontino. Gosto de usar a criatividade para solucionar problemas. Desenvolvo sites e escrevo livros.
      </p>
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