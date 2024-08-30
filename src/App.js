import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Favourite from './components/Favourite/Favourite';
import Errorpage from './components/Error/Errorpage';
import { useState } from 'react';
import Email from './components/Email/Email';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
// import Api from './components/Axios/Api';
import Badge from 'react-bootstrap/Badge';
import AddCart from './components/CartAdd/AddCart';
function App() {
  const[favArr,setFavArr]=useState(JSON.parse(localStorage.getItem('e-kart')) || []);
  const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('add-cart')) || []);
  console.log("cartCount",cartCount);

  // Function to remove item from cart
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartCount.filter(item => item.id !== id);
    setCartCount(updatedCart);
    localStorage.setItem('add-cart', JSON.stringify(updatedCart));
  };

  return (
    <>
    <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/product_list">Product List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/fav">Favourite</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/email">Email</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link href="/axios">Axios</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
          <Nav.Link href="/cart">
            Cart <Badge variant="light">{cartCount.length}</Badge>
          </Nav.Link>
        </Nav.Item>
      {/* <input type="text" placeholder='search category'/> */}
    </Nav>

    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product_list" element={<Products favArr={favArr} setFavArr={setFavArr} cartCount={cartCount} setCartCount={setCartCount}/>}/>
          <Route path="/fav" element={<Favourite favArr={favArr}/>}/>
          <Route path="/email" element={<Email/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/axios" element={<Api/>}/> */}
          <Route path="/cart" element={<AddCart cartCount={cartCount} setCartCount={setCartCount} handleRemoveFromCart={handleRemoveFromCart} /> }/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </Router>
  </>
  );
}

export default App;
