import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import ProductList from './components/ProductList';
import pageNotFound from './components/pageNotFound';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/product/:productId" component={ProductDetails}/>
          <Route exact path="*" component={pageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
