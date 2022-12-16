import './App.css';
import logo from './resources/shop-logo.png';
import Product from './components/Product';
import Products from './resources/ProductList.json';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShoppingCart from './components/Cart';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxwidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <div className="app__nav">
          <IconButton onClick={handleOpen} color="primary" aria-label="add to shopping cart">
            <ShoppingCartIcon sx={{ color: red[600], fontSize: 60 }} />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={modalStyle}>
              <ShoppingCart />
            </Box>
          </Modal>
        </div>
      </header>
      <body className="product__pannel">
        {Products.map(item => (
          <div className="product_item">
            < Product name={item.name} description={item.description} price={item.price} imageUrl={item.imageUrl} />
          </div>
        ))}
      </body>
    </div>
  );
}

export default App;
