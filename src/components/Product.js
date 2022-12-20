import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CountButtons from './QtyButton';

const OrderList = [];
export default function Product(props) {

  const getQty = () => {
    const temp = CountButtons;
    const qty = temp.count;
    console.log(qty);
    return qty;
  }
  const quantity = 0;

  const order = () => {
    return {
      id: props.id,
      product: props.name,
      qty: getQty(),
      price: props.price,
    }
  };

  const checkMultiItems = (newItem) => {
    if (OrderList.length > 0) {
      if (OrderList.find(order => order.product === newItem.product)) {
        OrderList.find(order => order.product === newItem.product ? order.qty += newItem.qty : console.log(""));
      } else {
        OrderList.push(newItem);
      }
    } else {
      OrderList.push(newItem);
    }
  }

  const addCart = () => {
    const newOder = order();
    checkMultiItems(order());
  };

  return (
    <Card sx={{ maxWidth: 400, minWidth: 300, maxHeight: 520, minHeight: 520 }}>
      <CardMedia
        component="img"
        height="280"
        image={props.imageUrl}
      />
      <CardContent>
        <Typography gutterTop variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>AUD{props.price}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}} >
        <CountButtons />
        <Button sx={{ backgroundColor: red[100], color: red[600]}}  onClick={addCart} size="small">add to cart</Button>
      </CardActions>
    </Card>
  );
}
export { OrderList };