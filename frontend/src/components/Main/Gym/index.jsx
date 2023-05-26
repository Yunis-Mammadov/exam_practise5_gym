import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { deleteGym, getAll } from '../../../api/request';
import styles from "../Gym/index.module.css";

const Gym = () => {
    const [gym,setGym] = useState([])

    useEffect(()=>{
        getAll().then(data => {
            setGym(data)
        }) 
    },[])

    
    const handleDelete = async(gymId) => {
        setGym(prevGyms => prevGyms.filter(gym =>  gym._id !== gymId ))
       await deleteGym(gymId)
   
     }
    
    return (
        <>
                <div className={styles.gymText}>
                    <h1 className={styles.gymH1}>We care about what we offer</h1>
                    <p className={styles.gymP}>Who are in extremely love with eco friendly system.</p>
                </div>
            <Grid container spacing={7} item xs={10} margin={"0 auto"}>
                {gym.map(gyms => (
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card} sx={{ minWidth: 275 ,height:"40vh"}}>
                        <CardContent className={styles.gymImg}>
                            <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                <img  src={gyms.imageURL} alt="" />
                            </Typography>
                                <h3>
                                {gyms.name}
                                </h3>
                            <Typography sx={{textAlign:"center"}} color="text.secondary">
                                {gyms.description}
                            </Typography>
                            <button onClick={() => handleDelete(gyms._id)} className={styles.buttonGym}>Delete</button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Gym
