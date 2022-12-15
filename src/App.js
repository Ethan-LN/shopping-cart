import './App.css';
import logo from './shop-logo.png';
import Product from './components/Product';
import Products from './ProductList.json'
function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <body className="product__pannel">
        {Products.map(item => (
              < Product name= {item.name} description={item.description} price={item.price} imageUrl= {item.imageUrl}/> 
        ))}
      </body>
    </div>
  );
}

export default App;
