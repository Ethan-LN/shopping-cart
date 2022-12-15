import './App.css';
import logo from './shop-logo.png';
import Product from './components/Product';
import Products from './ProductList.json'
// import cart from './shopping-cart.png';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <div className="app__nav">
          <IconButton color="primary" aria-label="add to shopping cart">
            <ShoppingCartIcon sx={{ color: pink[500],fontSize: 60}}/>
          </IconButton>
        </div>
      </header>
      <body className="product__pannel">
        {Products.map(item => (
            <div className="product_item">
              < Product name= {item.name} description={item.description} price={item.price} imageUrl= {item.imageUrl}/>
            </div>
        ))}
      </body>
    </div>
  );
}

export default App;
