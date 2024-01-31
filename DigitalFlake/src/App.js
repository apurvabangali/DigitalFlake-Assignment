import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignp/LoginSignup';
import Products from './Components/Products/Products'
import Dashboard from './Components/Dashboard/Dashboard';
import Categories from './Components/Categories/Categories';
import AddProduct from './Components/Products/AddProduct'
import AddCategory from './Components/Categories/AddCategory';


function App() {
  return (
    
    <Router>
      <Routes>
      <Route path='/' Component={LoginSignup}></Route>
      <Route path='/Home' Component={Dashboard}></Route>
      <Route path='/Products' Component={Products}></Route>
      <Route path='/Categories' Component={Categories}></Route>
      <Route path='/AddProduct' Component={AddProduct}></Route>
      <Route path='/AddNewCategory' Component={AddCategory}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
