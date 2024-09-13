import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';

export default function Cardcomponent() {
  return (
    <>
    <Card sx={{ maxWidth: 200 }} className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          alt="green iguana"
         
        />
           <div style={{ padding: '4px 8px', borderRadius: '0px 0px 10px 10px', backgroundColor: '#fff'}} >
        <Chip label="100ms"  variant="outlined" style={{ backgroundColor: 'var(--color-black)', color: '#fff'}} />
      </div> 
      <CardContent style={{ padding: '2px'}}>
        <Typography variant="p" component="div" style={{ color: '#fff', fontWeight: '400', fontSize: '14px', lineHeight: '21px' }}>text</Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
