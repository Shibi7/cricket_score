// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { getMatches } from './api/Apii';
import { Fragment, useEffect, useState } from 'react';
import React from 'react';
import Mycard from './components/Mycard';
import {Grid, Typography} from '@mui/material';


function App() {
  const [matches,setMatches] = useState([]);

  useEffect(() => {
    getMatches()
    .then((data) => {setMatches([...data.data]);
    console.log(data.data);})
    .catch(error => console.log("Error: ",error))

  }, []);
  
 
  return (
    <div className="App">
      <Navbar />
      <Typography variant = "h3" >Welcome to cricket score App</Typography>
      <Grid container>
        {
        matches.map((match)=>(
          <Fragment>
            {
              match.type ==="Twenty20" ?(
                <Mycard key={match.unique_id} match = {match} />
              )
              :("")
            }
          </Fragment>
          ))
      }
        </Grid>
      
    </div>
  );
}

export default App;
