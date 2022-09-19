import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
import Card from '@mui/material/Card';

function Mycard({match}) {
    const getMatchCard = ()=>{
        return (
            <Card style = {{marginTop : 20}}>
                <CardContent>
                <Grid container justifyContent={"center"} alignItems="center" spacing={4}>
                    <Grid item>
                        <Typography variant="h6" >{match["team-1"]}</Typography></Grid>
                    <Grid item>
                        <img style ={{width : 85}} src={require("../img/vs.png")} alt = "" />
                        </Grid>
                    <Grid item>
                    <Typography  variant="h6" >{match["team-2"]}</Typography></Grid>
                </Grid>
                </CardContent>
            <CardActions>
                <Grid container justifyContent={"center"} >
                <Button variant ="contained" color ="primary" >Show Detail</Button>
                 <Button style={{marginLeft:10}} variant ="contained" color ="primary"> Start Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                </Grid>

            </CardActions>
            </Card>
        )
    }
  return   getMatchCard();
}

export default Mycard