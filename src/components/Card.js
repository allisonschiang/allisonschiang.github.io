import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    return (
      <Card sx={{ maxWidth: 345, borderRadius: '15px', m: 2 }}>
        <img 
          src={props.image} 
          alt={props.title} 
          style={{ width: '100%', borderRadius: '15px 15px 0 0' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{window.open(props.link, "_blank")}}>
              See more details!
          </Button>
        </CardActions>
      </Card>
    );
  }
  