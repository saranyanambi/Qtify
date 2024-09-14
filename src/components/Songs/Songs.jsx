import * as React from 'react';
import Box from '@mui/material/Box';
import {Tab,Tabs} from '@mui/material';
import axios from 'axios';
import { useEffect ,useState} from 'react';
import Carousel from '../Carousel/Carousel';
import CardComponent from '../Card/Card';
import styles from './songs.module.css'

const Songs=({title}) =>{
  
     const [genres,setGeneres]=useState([]);   
     const [song,setSong]=useState([]);
     const [filtersongs,setFiltersongs]=useState([]);
     const [selectgenre,setSelectedgenre]=useState("All")

  const handleChange = (event, newValue) => {
    setSelectedgenre(newValue);
    if(newValue==='All')
    {
        setFiltersongs(song)
    }
    else{
        setFiltersongs(song.filter(songele=>songele.genre.key===newValue))
    }
  };

 

  useEffect(()=>{
    const selectTab=async()=>{

        try{
            const genresres=await axios.get('https://qtify-backend-labs.crio.do/genres')
            console.log(genresres.data.data);
            setGeneres(['All',...genresres.data.data])
          

            const songres=await axios.get("https://qtify-backend-labs.crio.do/songs")
            console.log(songres.data)
            setSong(songres.data);
            setFiltersongs(songres.data)

            
        }
        catch(error)
        {
            console.log(error);
        }
      }
      selectTab();
    
  },[])

  return (
    <Box className={styles.songSection}>

        <div className={styles.songTitle}>
            <h3>{title}</h3>
        </div>
    
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <Tabs value={selectgenre} onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{style: {backgroundColor: 'var(--color-primary)'}}}>
            

                {genres.map((genre, index) => (
               <Tab key={index} label={typeof(genre) === 'object' ? genre.label : 'All'} id={genre.key} value={typeof(genre) === 'object' ? genre.key : 'All'} style={{color: 'var(--color-white)'}} />
              ))}
          </Tabs>
              {/* <div>
                <Carousel item={filtersongs.map(song=>(<CardComponent key={song.id} album={song} />))}/>
              </div> */}
         <div >
          <div style={{ marginTop: '20px' }}>
              <Carousel items={filtersongs.map(song => (
                <CardComponent key={song.id} album={song} />
              ))} />
            </div> 
            </div>
        </Box>
       
    </Box>
  );
}


export default Songs