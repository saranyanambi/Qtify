// import * as React from 'react';
// import Box from '@mui/material/Box';
// import {Tab,Tabs} from '@mui/material';
// import axios from 'axios';
// import { useEffect ,useState} from 'react';
// import Carousel from '../Carousel/Carousel';
// import CardComponent from '../Card/Card';
// import styles from './songs.module.css'

// const Songs=({title}) =>{
  
//      const [genres,setGeneres]=useState([]);   
//      const [song,setSong]=useState([]);
//      const [filtersongs,setFiltersongs]=useState([]);
//      const [selectgenre,setSelectedgenre]=useState("All")

//   const handleChange = (event, newValue) => {
//     setSelectedgenre(newValue);
//     if(newValue==='All')
//     {
//         setFiltersongs(song)
//     }
//     else{
//         setFiltersongs(song.filter(songele=>songele.genre.key===newValue))
//     }
//   };

 

//   useEffect(()=>{
//     const selectTab=async()=>{

//         try{
//             const genresres=await axios.get('https://qtify-backend-labs.crio.do/genres')
//             console.log(genresres.data.data);
//             setGeneres(['All',...genresres.data.data])
          

//             const songres=await axios.get("https://qtify-backend-labs.crio.do/songs")
//             console.log(songres.data)
//             setSong(songres.data);
//             setFiltersongs(songres.data)

            
//         }
//         catch(error)
//         {
//             console.log(error);
//         }
//       }
//       selectTab();
    
//   },[])

//   return (
//     <Box className={styles.songSection}>

//         <div className={styles.songTitle}>
//             <h3>{title}</h3>
//         </div>
    
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
//           <Tabs value={selectgenre} onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{style: {backgroundColor: 'var(--color-primary)'}}}>
            

//                 {genres.map((genre, index) => (
//                <Tab key={index} label={typeof(genre) === 'object' ? genre.label : 'All'} id={genre.key} value={typeof(genre) === 'object' ? genre.key : 'All'} style={{color: 'var(--color-white)'}} />
//               ))}
//           </Tabs>
//               {/* <div>
//                 <Carousel item={filtersongs.map(song=>(<CardComponent key={song.id} album={song} />))}/>
//               </div> */}
//          <div >
//           <div style={{ marginTop: '20px' }}>
//               <Carousel items={filtersongs.map(song => (
//                 <CardComponent key={song.id} album={song} />
//               ))} />
//             </div> 
//             </div>
//         </Box>
       
//     </Box>
//   );
// }


// export default Songs


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import Carousel from '../Carousel/Carousel';
import Cardcomponents from '../Card/Card';

import styles from "./songs.module.css";

const Songs = ({title}) => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const songsResponse = await axios.get('https://qtify-backend-labs.crio.do/songs',{
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        });
        const genresResponse = await axios.get('https://qtify-backend-labs.crio.do/genres',{
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        });
        console.log(songsResponse.data)
        setSongs(songsResponse.data);
        setGenres(['All', ...genresResponse.data.data]); // Add "All" to the beginning of the genres list
        setFilteredSongs(songsResponse.data); // Default to all songs
      } catch (error) {
        console.error('Error fetching songs or genres:', error);
      }
    };

    fetchSongsAndGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
    console.log(songs)
    if (newValue === 'All') {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter(song => song.genre.key === newValue));
    }
  };
  return (
    <>
      <Box component="section" className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
            <h3>{title} </h3>
        </div>
        <div className={styles.sectionTitle}>
          <Box>
            <Tabs value={selectedGenre} onChange={handleTabChange} aria-label="songs genre tabs" TabIndicatorProps={{style: {backgroundColor: 'var(--color-primary)'}}} >
              {genres.map((genre, index) => (
               <Tab key={index} label={typeof(genre) === 'object' ? genre.label : 'All'} id={genre.key} value={typeof(genre) === 'object' ? genre.key : 'All'} style={{color: 'var(--color-white)'}} />
              ))}
            </Tabs>
            <div style={{ marginTop: '20px' }}>
              <Carousel items={filteredSongs.map(song => (
                <Cardcomponents key={song.id} album={song} />
              ))} />
            </div>            
          </Box>
        </div>
      </Box>      
    </>
  )
}

export default Songs