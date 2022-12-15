import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupedButtons from './QtyButton';


const orderList = [];
export default function Product(props) {

  const getQty = () => {
    const temp = GroupedButtons;
    const qty = temp.props.counter;
    console.log(qty);
    return qty;
  }
  // const quantity = getQty();
  const order = (quantity) => { return {
      product: props.name,
      // qty: quantity,
      price: props.price,
    }
  };

  const addCart = (quantity) => {
    orderList.push(order(quantity));
    console.log(orderList);
  };
  

  return (
    <Card sx={{ maxWidth: 400, minWidth:300, maxHeight:520, minHeight:520}}>
      <CardMedia
        component="img"
        height="280"
        image= {props.imageUrl}
        />
      <CardActions >
        <GroupedButtons /*counter={this.props.counter}*//>
        {/* {console.log(counter)}; */}
        <Button onClick={addCart} size="small">add to cart</Button>
      </CardActions>
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

    </Card>
  );
}
