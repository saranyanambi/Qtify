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

const CardComponent = ({album}) => {
  // console.log(album)
  const { title, image: imageAlbum, id, follows, likes } = album;
  return (
    <>
    <Card className={styles.card}>
      
        <CardMedia
          component="img"
          height="150"
          image={imageAlbum}
          alt="green iguana"
          title={title}
          className={styles.cardmedia}
        />
           <div className={styles.chip}>
                <Chip label={ follows ? `${follows} Follows` : `${likes} Likes` }   variant="outlined" style={{ backgroundColor: 'var(--color-black)', color: '#fff'}} />
           </div> 
      <CardContent style={{ padding: '2px'}}>
        <Typography variant="p" component="div" style={{ color: 'white', fontWeight: '400', fontSize: '14px', lineHeight: '21px' }}>{title}</Typography>
      </CardContent>
      
    </Card>
    </>
  );
}

export default CardComponent;
