import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupedButtons from './QtyButton';

export default function Product(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 400, minWidth:300, maxHeight:520, minHeight:520}}>
      <CardMedia
        component="img"
        height="280"
        image= {props.imageUrl}
        />
      <CardActions >
        <GroupedButtons/>
        <Button  onclick={handleOpen} size="small">add to cart</Button>
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